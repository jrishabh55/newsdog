import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Contract as API } from '../api/Contract';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: string;
  user: Object;

  constructor(private api: API) {
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(this.buildAdminUrl('register'), user, { headers: headers });
  }

  storeUserData(data) {
    this.authToken = data.token;
    this.user = data.user;

    localStorage.setItem('id_token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }

  loginUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(this.buildAdminUrl('login'), user, { headers: headers });
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loadProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    return this.api.get(this.buildAdminUrl('profile'), { headers: headers });
  }

  protected loadToken() {
    this.authToken = localStorage.getItem('id_token');
    return this.authToken;
  }

  protected buildAdminUrl(type: string): string {
    return this.api.buildUrl(type);
  }

}
