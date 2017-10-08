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
  changeUserid: number = null;
  constructor(private api: API) { }

  setPage(value) {
    if (value >= 0 && value < this.users.length / this.noOfResults) {
      const first: number = value * this.noOfResults;
      this.visibleUsers = [];
      this.visibleUsers = this.users.slice(first, first + this.noOfResults);
    }
  }

  enter (id: number, e: KeyboardEvent, value: string): void {
    if (e.key === 'Enter') {

      const element: HTMLInputElement = <HTMLInputElement> document.getElementById(`cr-${id}`);
      element.setAttribute('disabled', 'true');

      const credits: number = parseInt(element.value, 10);

      if (credits < 1 || credits >= 100000) {
        this.changeUserid = null;
        element.removeAttribute('disabled');
        return;
      }

      const url = this.api.buildUrl(`user-${id}`);
      this.api.patch(url, {credits: credits}).subscribe(response => {
        console.log(response);
        this.users.every(user => {
          if (response.data.user._id === user._id) {
            user.credits = response.data.user.credits;
            return false;
          }
          return true;
        });
        this.setUsersInLS();
        this.changeUserid = null;
        element.removeAttribute('disabled');
      });

    }
  }

  changeCredits (id: number): void {
    this.changeUserid = id;
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
          this.setUsersInLS();
        }
      });
    } else {
      this.users = this.getUsersInLS();
      this.visibleUsers = this.users.slice(0, this.noOfResults);
      this.pages = this.range(Math.ceil(this.users.length / this.noOfResults));
      this.result = true;
    }
  }

  public setUsersInLS (users: Array<User> = null): void {
    if (users === null) {
      users = this.users;
    }
    localStorage.setItem('users', JSON.stringify(users));
  }

  public getUsersInLS (): Array<User> {
    return JSON.parse(localStorage.getItem('users'));
  }

  ngOnDestroy() {
    this.result = false;
  }

}
