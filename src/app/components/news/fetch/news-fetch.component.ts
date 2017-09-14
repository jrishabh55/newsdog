import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'jnex-fetch',
  templateUrl: './news-fetch.component.html',
  styleUrls: ['./news-fetch.component.css']
})
export class NewsFetchComponent implements OnInit {

  created: Boolean;
  error: string;

  fetchNewsForm: FormGroup;
  res = null;

  constructor(private http: Http) {
  }

  fetchNews(data) {
    const url = data.url;
    this.res = null;
    this.http.get(url)
      .map(res => res.json())
      .subscribe(res => {
        this.res = res;
      });
  }

  ngOnInit() {
    this.fetchNewsForm = new FormGroup({
      url: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'),
      ]))
    });
  }

}
