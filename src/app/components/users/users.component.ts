import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../Interfaces';
import {Contract as API} from '../../api/Contract';
import {ResponseObject} from '../../api/ResponseObject';

@Component({
  selector: 'jnex-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: Array<User>;
  result: Boolean = false;

  constructor(private api: API) {
  }

  ngOnInit() {

    const url = this.api.buildUrl('users');
    this.api.get(url).subscribe((response: ResponseObject) => {
      if (response.error) {
        console.log(response.error);
      } else {
        this.users = response.data.users;
        this.result = true;
      }
    });

  }

  ngOnDestroy() {
    this.result = false;
  }

}
