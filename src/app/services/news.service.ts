import { Injectable } from '@angular/core';
import { Contract as API } from '../api/Contract';
import { ResponseObject } from '../api/ResponseObject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsService {

  constructor(private api: API) { }

  get(): Observable<ResponseObject> {
    return this.api.get(this.api.buildUrl('news'), '');
  }
}
