import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: string;
  user: Object;
  apiHost: String = 'localhost';
  apiProtocol: String = 'http';
  apiPORT = 3012;

  constructor(private http: Http) {
  }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.buildAdminUrl('register'), user, {headers: headers})
      .map(res => res.json());
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
    return this.http.post(this.buildAdminUrl('login'), user, {headers: headers})
      .map(res => res.json());
  }

  loggedIn() {
    return tokenNotExpired('id_token');
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

    return this.http.get(this.buildAdminUrl('profile'), {headers: headers})
      .map(res => res.json());
  }

  protected loadToken() {
    this.authToken = localStorage.getItem('id_token');
    return this.authToken;
  }

  protected buildAdminUrl(type: String) {
    return `${this.apiProtocol}://${this.apiHost}:${this.apiPORT}/api/admin/${type}`;
  }

}
