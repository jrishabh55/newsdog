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
  message: string;
  result: boolean;
  working: boolean = false;

  loginError = {
    username: false,
    password: false
  };

  constructor(private authService: AuthService,
              private router: Router) {}

  loginFormSubmit(user) {
    this.working = true;
    this.authService.loginUser(user).subscribe(data => {
      if (data.status === 'ok') {
        this.authService.storeUserData(data.data);
        this.message = 'Logged In, Redirecting ';
        this.result = true;
        this.router.navigate(['/dashboard']);
      } else {
        if (data.error === 'No User') {
          this.loginError.username = true;
        } else {
          this.loginError.password = true;
        }
      }
      this.working = false;

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
