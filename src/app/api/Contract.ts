import { Http, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';


export class Contract {

  host: String = 'localhost';
  protocol: String = 'http';
  port = 3000;

  constructor(private http: Http) { }

  get(url: string, options: RequestOptionsArgs) {
    return this.http.get(url, options).map(res => res.json());
  }

  post(url: string, body: any, options?: RequestOptionsArgs) {
    return this.http.post(url, body, options).map(res => res.json());
  }

  buildUrl(url: string): string {
    if (this.host.length === 0) {
      return `/api/admin/${url}`;
    }
    return `${this.protocol}://${this.host}:${this.port}/api/admin/${url}`;
  }
}
