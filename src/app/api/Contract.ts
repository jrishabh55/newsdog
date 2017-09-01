import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ResponseObject} from './ResponseObject';
import 'rxjs/add/operator/map';

@Injectable()
export class Contract {

  host: String = 'localhost';
  protocol: String = 'http';
  port = 80;

  constructor(private http: Http) {
  }

  get(url: string, options?: RequestOptionsArgs): Observable<ResponseObject> {

    if (options) {
      if (options.headers) {
        this.authHeader(options.headers);
      } else {
        options.headers = new Headers();
        this.authHeader(options.headers);
      }
    } else {
      options = {
        headers: new Headers()
      };
      this.authHeader(options.headers);
    }

    return this.http.get(url, options).map(res => res.json());
  }

  post(url: string, body: any = {}, options?: RequestOptionsArgs): Observable<ResponseObject> {

    if (options) {
      if (options.headers) {
        this.authHeader(options.headers);
      } else {
        options.headers = new Headers();
        this.authHeader(options.headers);
      }
    } else {
      options = {
        headers: new Headers()
      };
      this.authHeader(options.headers);
    }
    return this.http.post(url, body, options).map(res => res.json());
  }


  private authHeader(headers: Headers) {
    // headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', localStorage.getItem('id_token') || null);
  }

  buildUrl(url: string): string {
    if (this.host.length <= 1) {
      return `api/admin/${url}`;
    }
    return `${this.protocol}://${this.host}:${this.port}/api/admin/${url}`;
  }
}
