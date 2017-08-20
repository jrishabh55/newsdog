import {Component, OnInit} from '@angular/core';
import {User} from '../../Interfaces';
import {Contract as API} from '../../api/Contract';

@Component({
  selector: 'jnex-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<User>;

  constructor(private api: API) {
  }

  ngOnInit() {
    this.users = [
      {username: 'rish', 'email': 'emails@email.com', 'credits': 120, registered: 'thud'},
      {username: 'rish', 'email': 'emails@email.com', 'credits': 120, registered: 'thud'},
      {username: 'rish', 'email': 'emails@email.com', 'credits': 120, registered: 'thud'},
      {username: 'rish', 'email': 'emails@email.com', 'credits': 120, registered: 'thud'},
      {username: 'rish', 'email': 'emails@email.com', 'credits': 120, registered: 'thud'},
      {username: 'rish', 'email': 'emails@email.com', 'credits': 120, registered: 'thud'},
      {username: 'rish', 'email': 'emails@email.com', 'credits': 120, registered: 'thud'},
      {username: 'rish', 'email': 'emails@email.com', 'credits': 120, registered: 'thud'},
      {username: 'rish', 'email': 'emails@email.com', 'credits': 120, registered: 'thud'},
    ];
    // const url = this.api.buildUrl('users');
    // this.api.get(url, {}).subscribe(response => {
    //   this.users = response.data.users;
    // });
  }

}
