import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'jnex-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.loadProfile().subscribe(profile => {
        this.user = profile.data;
      },
      err => {
        console.log(err);
        return false;
      });
  }

}
