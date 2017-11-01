import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contract as API } from '../../api/Contract';
import { Category, Tag } from '../../Interfaces';
import * as firebase from 'firebase';

@Component({
  selector: 'jnex-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  @Input('news') news: { title: string, desc: string, date: string };

  result: Boolean = false;
  working: boolean = false;
  newsForm: FormGroup;
  categories: Array<Category>;
  tags: Array<Tag> = [];
  created: Boolean = null;
  error: string;
  notification: boolean = true;

  constructor(private api: API) {
  }

  selectCategory(id: Event) {
    this.newsForm.patchValue({ category: id });
  }

  selectTags(options: Event) {
    let tags = Array.apply(null, options).filter(option => option.selected);
    tags = tags.map(tag => tag.value);
    this.newsForm.patchValue({ tags: tags });
  }

  content(e: string): void {
    this.newsForm.patchValue({ 'desc': e });
  }

  content_hn(e: string): void {
    this.newsForm.patchValue({ 'desc_hn': e });
  }

  uploadImage(file, callback) {
    const fileRef = firebase.storage().ref().child('/test/' + file.name);
    fileRef.put(file)
      .then(callback)
      .catch(error => console.log(error));
  }

  createNews(news) {
    if (news.desc === '' && news.desc_hn === '') {
      this.created = false;
      this.error = 'Invalid Content. Please add some contet. ';
      window.scrollTo(0, 0);
      return;
    }

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
    this.working = true;

    const upload = new Promise((resolve, reject) => {
      if (news.thumb1 !== '') {
        this.uploadImage(news.thumb1[0], (snap1) => {
          news.thumb1 = snap1.downloadURL;
          if (news.thumb2 !== '') {
            this.uploadImage(news.thumb2[0], snap2 => {
              news.thumb2 = snap2.downloadURL;
              this.uploadImage(news.thumb3[0], snap3 => {
                news.thumb3 = snap3.downloadURL;
                resolve();
              });
            });
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    });

    upload.then(() => {
      const url: string = this.api.buildUrl('news/add');
      news.notification = this.notification;
      this.api.post(url, news).subscribe((response) => {
        if (response.status === 'ok') {
          this.created = true;
        } else {
          this.created = false;
          this.error = response.error;
        }
        this.working = false;
        window.scrollTo(0, 0);
      });
    });
  }

  validation() {
    this.newsForm = new FormGroup({
      title: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])),
      desc: new FormControl('', Validators.compose([
        Validators.minLength(100),
      ])),
      desc_hn: new FormControl('', Validators.compose([
        Validators.minLength(100),
      ])),
      thumb1: new FormControl('', Validators.compose([])),
      thumb2: new FormControl('', Validators.compose([])),
      thumb3: new FormControl('', Validators.compose([])),
      credits: new FormControl('10', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.min(1)
      ])),
      author: new FormControl('Admin', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      category: new FormControl(''),
      tags: new FormControl(''),
    });
  }


  ngOnInit() {
    const url1 = this.api.buildUrl('/news/categories');

    this.api.get(url1).subscribe(response => {
      this.categories = response.data.categories;
      this.newsForm.patchValue({ category: this.categories[0]._id });
    });

    const url2 = this.api.buildUrl('/news/tags');
    this.api.get(url2).subscribe(response => {
      this.tags = response.data.tags;
    });

    this.validation();
    if (this.news) {
      console.log(this.news);
      this.newsForm.patchValue({
        title: this.news.title,
        desc: this.news.desc
      });
    }
  }

  ngOnDestroy() {
    this.result = false;
    this.created = null;
  }
}
