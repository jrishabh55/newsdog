import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ResponseObject } from './ResponseObject';
import 'rxjs/add/operator/map';

@Injectable()
export class Contract {

  host: String = '';
  protocol: String = 'http';
  port = 80;

  constructor(private http: Http) {
  }

  get(url: string, options?: RequestOptionsArgs): Observable<ResponseObject> {

    if (options) {
      if (options.headers) {
        Contract.authHeader(options.headers);
      } else {
        options.headers = new Headers();
        Contract.authHeader(options.headers);
      }
    } else {
      options = {
        headers: new Headers()
      };
      Contract.authHeader(options.headers);
    }

    return this.http.get(url, options).map(res => res.json());
  }

  post(url: string, body: any = {}, options?: RequestOptionsArgs): Observable<ResponseObject> {

    if (options) {
      if (options.headers) {
        Contract.authHeader(options.headers);
      } else {
        options.headers = new Headers();
        Contract.authHeader(options.headers);
      }
    } else {
      options = {
        headers: new Headers()
      };
      Contract.authHeader(options.headers);
    }
    return this.http.post(url, body, options).map(res => res.json());
  }

  patch(url: string, body: any = {}, options?: RequestOptionsArgs): Observable<ResponseObject> {

    if (options) {
      if (options.headers) {
        Contract.authHeader(options.headers);
      } else {
        options.headers = new Headers();
        Contract.authHeader(options.headers);
      }
    } else {
      options = {
        headers: new Headers()
      };
      Contract.authHeader(options.headers);
    }
    return this.http.patch(url, body, options).map(res => res.json());
  }

  put(url: string, body: any = {}, options?: RequestOptionsArgs): Observable<ResponseObject> {

    if (options) {
      if (options.headers) {
        Contract.authHeader(options.headers);
      } else {
        options.headers = new Headers();
        Contract.authHeader(options.headers);
      }
    } else {
      options = {
        headers: new Headers()
      };
      Contract.authHeader(options.headers);
    }
    return this.http.put(url, body, options).map(res => res.json());
  }

  del(url: string, options?: RequestOptionsArgs): Observable<ResponseObject> {

    if (options) {
      if (options.headers) {
        Contract.authHeader(options.headers);
      } else {
        options.headers = new Headers();
        Contract.authHeader(options.headers);
      }
    } else {
      options = {
        headers: new Headers()
      };
      Contract.authHeader(options.headers);
    }
    return this.http.delete(url, options).map(res => res.json());
  }


  private static authHeader(headers: Headers) {
    headers.append('Accept', 'application/json');
    headers.append('Authorization', localStorage.getItem('id_token') || '');
  }

  buildUrl(url: string): string {
    if (this.host.length <= 1) {
      return `/api/v1/admin/${url}`;
    }
    return `${this.protocol}://${this.host}:${this.port}/api/v1/admin/${url}`;
  }
}
