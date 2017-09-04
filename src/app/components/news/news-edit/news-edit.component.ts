import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contract as API} from '../../../api/Contract';
import {Category, News} from '../../../interfaces';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'jnex-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit, OnDestroy {

  category: number = 1;
  news: News = null;
  newsUrl: string;
  result: Boolean = false;
  newsForm: FormGroup;
  categories: Array<Category>;
  created: Boolean = null;
  error: string;

  constructor(private api: API, private route: ActivatedRoute) {
  }

  selectCategory(id: Event) {
    this.newsForm.patchValue({category: id});

  }

  content(e: Event): void {
    this.newsForm.patchValue({'desc': e});
    console.log(this.newsForm.errors, this.newsForm.controls);
  }

  updateNews(news) {
    if (news.thumb2 !== '') {
      if (news.thumb3 === '') {
        this.created = false;
        this.error = 'Invalid Style. Please add the third image.';
        window.scrollTo(0, 0);
        return;
      }
    }

    if (news.thumb3 !== '') {
      if (news.thumb2 === '') {
        this.created = false;
        this.error = 'Invalid Style. Please add the third image.';
        window.scrollTo(0, 0);
        return;
      }
    }

    const url: string = this.api.buildUrl(`news/${news._id}/view`);
    this.api.post(url, news).subscribe((response) => {
      if (response.status = 'ok') {
        this.created = true;
      } else {
        this.created = false;
        this.error = response.error;
      }
      window.scrollTo(0, 0);
    });
  }

  validation() {
    this.newsForm = new FormGroup({
      title: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])),
      desc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
      ])),
      time: new FormControl('5000', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')
      ])),
      thumb1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'),
      ])),
      thumb2: new FormControl('', Validators.compose([
        Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'),
      ])),
      thumb3: new FormControl('', Validators.compose([
        Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'),
      ])),
      credits: new FormControl('1', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.min(1)
      ])),
      author: new FormControl('Admin', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      category: new FormControl('0')

    });
  }


  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.newsUrl = this.api.buildUrl(`news/${params.id}/view`);
      this.api.get(this.newsUrl).subscribe(response => {
        if (response.status = 'ok') {
          this.news = response.data.news;
          this.category = this.news.category;
          this.newsForm.setValue({
            title: this.news.title,
            desc: this.news.desc,
            author: this.news.author,
            category: this.news.category,
            time: this.news.time,
            credits: this.news.credits,
            thumb1: this.news.thumbnail.url1,
            thumb2: this.news.thumbnail.url2 || '',
            thumb3: this.news.thumbnail.url3 || '',
          }, {onlySelf: true});
        } else {
          this.error = response.error;
        }
      });

    });

    const url = this.api.buildUrl('news/categories');
    this.api.get(url).subscribe(response => {
      this.categories = response.data.categories;
    });

    this.validation();
  }

  ngOnDestroy() {
    this.result = false;
    this.created = null;
  }


}
