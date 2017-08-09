import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'ngx-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'jnex-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private flash: FlashMessagesService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  userLogout() {
    this.authService.logout();
    this.flash.show('Logged Out', {
      classes: ['alert', 'alert-success'],
      timeout: 5000,
    });
    this.router.navigate(['/users/login']);
    return false;
  }
}
