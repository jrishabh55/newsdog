import {Injectable} from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Contract {

  host: String = '';
  protocol: String = 'http';
  port = 80;

  constructor(private http: Http) { }

  get(url: string, options: RequestOptionsArgs) {
    return this.http.get(url, options).map(res => res.json());
  }

  post(url: string, body: any, options?: RequestOptionsArgs) {
    return this.http.post(url, body, options).map(res => res.json());
  }

  buildUrl(url: string): string {
    if (this.host.length <= 1) {
      return `api/admin/${url}`;
    }
    console.log(this.host.length);
    return `${this.protocol}://${this.host}:${this.port}/api/admin/${url}`;
  }
}
