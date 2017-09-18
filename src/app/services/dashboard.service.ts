import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Contract as API} from '../api/Contract';
import { Observable } from 'rxjs/Observable';
import { ResponseObject } from '../api/ResponseObject';

@Injectable()
export class DashboardService {

  constructor(private api: API) {}

  getData(): Observable<ResponseObject> {
    const url = this.api.buildUrl("");
    return this.api.get(url);
  }
}
