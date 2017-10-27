import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';


@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jnex';

  constructor(private auth: AuthService) {}

  public disabled: Boolean = false;
  public status: { isopen: boolean } = {isopen: false};

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit() {
   if (this.auth.loggedIn()) {
     const OneSignal = window['OneSignal'] || [];
     OneSignal.push(['init', {
       appId: '22015133-3cd8-4c27-b374-f5b7f6e35c6b',
       autoRegister: false,
       httpPermissionRequest: {
         enable: true
       },
       notifyButton: {
         enable: true /* Set to false to hide */
       }
     }]);
   }
  }
}
