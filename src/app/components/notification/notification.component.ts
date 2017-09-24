import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contract as API} from '../../api/Contract';

@Component({
  selector: 'jnex-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  form: FormGroup;
  error: string;
  result: boolean | string;

  constructor(private api: API) { }

  sendNotification (form: {title: string, content: string}) {
    const url = this.api.buildUrl('notification');
    this.api.put(url, form).subscribe(response => {
      if (response.status === 'ok') {
        this.result = `Notification sucessful. No. of recipents ${response.data.notification.recipients}`;
      } else {
        this.result = false;
        this.error = response.error;
      }
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      'title': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])),
      'content': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(20)
      ]))
    });
  }
}
