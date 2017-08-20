import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FlashMessagesService} from 'ngx-flash-messages';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'jnex-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  loginError: Array<String> = [];

  constructor(private flash: FlashMessagesService,
              private authService: AuthService,
              private router: Router) {
  }

  registerFormSubmit(user) {
    this.flash.show('Registering User', {
      classes: ['alert', 'alert-primary'],
      timeout: 5000
    });

    this.authService.registerUser(user).subscribe(data => {
      if (data.status === 'ok') {
        this.flash.show('Registration successful', {
          classes: ['alert', 'alert-success'],
          timeout: 999999,
        });
        this.router.navigate(['/admin/login']);
      } else {
        this.flash.show('Something went wrong. Please try again', {
          classes: ['alert', 'alert-danger'],
          timeout: 5000,
        });
      }
    });

  }

  error(error) {
    this.loginError.push(error);
  }

  ngOnInit() {
    this.registrationFormValidation();
  }

  registrationFormValidation() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
    });
  }
}
