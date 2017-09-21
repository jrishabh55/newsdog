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

  created: boolean;
  error: string;

  fetchNewsForm: FormGroup;
  type = null;
  res = null;

  constructor(private http: Http) {}

  exploadUri (url: string, type: string): Object {
    let part;
    if(url.substr(0,7)) {
      part = url.substr(8);
    } else if(url.substr(0,8)) {
      part = url.substr(8);
    } else {
      part = url;
    }
    console.log(part);
    return {};
  }

  convertUri (url: string, type: string = 'id'): string {
    this.exploadUri(url, type);
    return url;
  }

  fetchNews(data: {type: string, url: string}): void {
    if(this.type !== null) {
      console.log('Not Selected');
      return;
    }
    this.convertUri(data.url, data.type);
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
