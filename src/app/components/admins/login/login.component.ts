import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FlashMessagesService} from 'ngx-flash-messages';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'jnex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  loginError = {
    username: false,
    password: false
  };

  constructor(private flash: FlashMessagesService,
              private authService: AuthService,
              private router: Router) {
  }

  loginFormSubmit(user) {
    console.log(user);
    this.authService.loginUser(user).subscribe(data => {
      console.log(data);

      if (data.status === 'ok') {

        this.authService.storeUserData(data.data);
        this.flash.show('Logged In, Redirecting ', {
          classes: ['alert', 'alert-success'],
          timeout: 5000
        });

        this.router.navigate(['/admin/profile']);

      } else {
        this.flash.show(data.error, {
          classes: ['alert', 'alert-danger'],
          timeout: 5000
        });
      }

    });
  }

  ngOnInit() {

    if (this.authService.loggedIn()) {
      this.router.navigate(['/']);
    }

    this.form = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
  }

}
