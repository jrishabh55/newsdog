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

    const url = this.api.buildUrl('users');
    this.api.get(url).subscribe((response) => {
      if (response.error) {
        console.log(response.error);
      } else {
        this.users = response.data.users;
      }
    });

  }

}
