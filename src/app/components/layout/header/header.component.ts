import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'jnex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public authService: AuthService) {
  }
}
