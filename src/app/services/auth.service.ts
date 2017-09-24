import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Contract as API } from '../api/Contract';
import { ResponseObject } from '../api/ResponseObject';
import { Observable } from 'rxjs/Observable';
import { User } from '../Interfaces';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private authToken: string;
  public user: User;

  constructor(private api: API) { }

  getUser (): User {
    return this.user || JSON.parse(localStorage.getItem('user')) || null;
  }

  loggedIn(): boolean {
    return tokenNotExpired('id_token');
  }

  registerUser(user): Observable<ResponseObject> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(this.buildAdminUrl('register'), user, { headers: headers });
  }

  storeUserData(data): void {
    this.authToken = data.token;
    this.user = data.user;

    localStorage.setItem('id_token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }

  loginUser(user): Observable<ResponseObject> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.api.post(this.buildAdminUrl('login'), user, { headers: headers });
  }

  logout(): void {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loadProfile(): Observable<ResponseObject> {
    const headers = new Headers();
    return this.api.get(this.buildAdminUrl('profile'), { headers: headers });
  }

  protected buildAdminUrl(type: string): string {
    return this.api.buildUrl(type);
  }

}
