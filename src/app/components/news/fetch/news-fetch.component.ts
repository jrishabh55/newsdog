import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contract as API } from '../../../api/Contract';
import 'rxjs/add/operator/map';

@Component({
  selector: 'jnex-fetch',
  templateUrl: './news-fetch.component.html',
  styleUrls: ['./news-fetch.component.css']
})
export class NewsFetchComponent implements OnInit {

  error: string;

  fetchNewsForm: FormGroup;

  working: boolean = false;
  added: boolean = false;
  res = null;
  news: { title: string, desc: string, date: string };
  slug: string;

  constructor(private api: API) { }

  convertUri(url: string, type: string): string {
    let part: string;
    let protocol: string;
    if (url.substr(0, 7) === 'http://') {
      part = url.substr(7);
      protocol = 'http://';
    } else if (url.substr(0, 8) === 'https://') {
      part = url.substr(8);
      protocol = 'https://';
    } else {
      protocol = 'http://';
      part = url;
    }
    const parts: Array<string> = part.split('/');
    const domain: string = parts[0];
    const slug: string = parts[parts.length - 1] === '' ? parts[parts.length - 2] : parts[parts.length - 1];

    let apiUrl = '';
    if (type === 'slug') {
      apiUrl = `${protocol}${domain}/wp-json/wp/v2/posts?slug=${slug}`;
      this.slug = slug;
    } else {
      apiUrl = '';
    }
    console.log(apiUrl);
    return apiUrl;
  }

  fetchNews(data: { type: string, url: string }): void {
    if (data.type === null) {
      console.log('Not Selected');
      return;
    }
    this.working = true;
    // const url = "https://www.bollywoodpapa.com/api/get_post/";
    this.res = null;
    this.added = false;
    this.api.post(this.api.buildUrl("fetch"), { slug: data.url })
      .subscribe(res => {
        this.working = false;
        if (res.status !== "ok") {
          this.error = res.error;
          return;
        }
        this.res = res.data.post;
      });
  }

  addNews(): void {
    this.news = { title: this.res.title, desc: this.res.content, date: this.res.date };
    this.added = true;
  }

  ngOnInit() {
    this.fetchNewsForm = new FormGroup({
      url: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('[-a-zA-Z0-9@:%._\\+~#=]'),
        // Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'),
      ])),
      type: new FormControl('', Validators.required)
    });
  }
}
