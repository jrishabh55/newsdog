import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Admin} from '../../../Interfaces';
import {Contract as API} from '../../../api/Contract';

@Component({
  selector: 'jnex-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  admin: Admin = null;
  form: FormGroup;
  result: boolean = null;
  loginError: any = {};
  error: string;

  constructor(private authService: AuthService, private api: API) { }

  updateFormSubmit (data) {
    const url = this.api.buildUrl('profile');
    this.api.patch(url, {password: data.password}).subscribe(response => {
      if (response.status === 'ok') {
        this.result = true;
      } else {
        this.error = response.error;
        this.result = false;
      }
    });
  }

  ngOnInit() {
    this.authService.loadProfile().subscribe(profile => {
        this.admin = profile.data.admin;
      },
      err => {
        console.log(err);
        return false;
      });

      this.form = new FormGroup({
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50)
        ]))
      });
  }

}
