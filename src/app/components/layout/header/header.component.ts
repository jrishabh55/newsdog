import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'ngx-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'jnex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  show: Boolean = false;

  constructor(private flash: FlashMessagesService,
              public authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  adminDrop(e) {
    e.stopPropagation();
    this.show = !this.show;
  }

  userLogout() {
    this.authService.logout();
    this.flash.show('Logged Out', {
      classes: ['alert', 'alert-success'],
      timeout: 5000,
    });
    this.router.navigate(['/admin/login']);
    return false;
  }
}
