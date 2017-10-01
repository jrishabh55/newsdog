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

  users: Array<User> = [];
  result: Boolean = false;
  visibleUsers: Array<User> = [];
  noOfResults: number = 10;
  pages: Array<number> = [1];

  constructor(private api: API) {
  }

  setPage(value) {
    if (value >= 0 && value < this.users.length / this.noOfResults) {
      const first = value * this.noOfResults;
      this.visibleUsers = [];
      this.visibleUsers = this.users.slice(first, first + this.noOfResults);
    }
  }

  range (end: number, start: number = 0) {
    return Array.from({length: (end - start)}, (v, k) => k + start);
  }

  ngOnInit() {
    const url = this.api.buildUrl('users');
    if (localStorage.getItem('users') === null) {
      this.api.get(url).subscribe((response: ResponseObject) => {
        if (response.status !== 'ok') {
          console.log(response.error);
          this.result = false;
        } else {
          this.users = response.data.users;
          this.visibleUsers = this.users.slice(0, this.noOfResults);
          this.pages = this.range(this.users.length / this.noOfResults);
          this.result = true;
          localStorage.setItem('users', JSON.stringify(this.users));
        }
      });
    } else {
      this.users = JSON.parse(localStorage.getItem('users'));
      this.visibleUsers = this.users.slice(0, this.noOfResults);
      this.pages = this.range(Math.ceil(this.users.length / this.noOfResults));
      this.result = true;
    }
  }

  ngOnDestroy() {
    this.result = false;
  }

}
