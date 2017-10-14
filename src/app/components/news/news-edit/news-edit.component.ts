import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contract as API} from '../../../api/Contract';
import {Category, News, Tag} from '../../../interfaces';
import {ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'jnex-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit, OnDestroy {

  category: number = 1;
  news: News = null;
  result: Boolean = false;
  newsForm: FormGroup;
  categories: Array<Category>;
  created: Boolean = null;
  error: string;
  tags: Array<Tag> = [];

  constructor(private api: API, private route: ActivatedRoute) {
  }

  checkSelectedTags(id) {
    let rt: boolean = false;

    this.news.tags.forEach((tag) => {
      if (+tag === id) {
        rt = true;
      }
    });
    return rt;
  }

  selectCategory(id: Event) {
    this.newsForm.patchValue({category: id});

  }

  selectTags(options: Event) {
    let tags = Array.apply(null, options).filter(option => option.selected);
    tags = tags.map(tag => tag.value);
    console.log(tags);
    this.newsForm.patchValue({tags: tags});
  }

  content(e: Event): void {
    this.newsForm.patchValue({'desc': e});
  }

  content_hn(e: Event): void {
    this.newsForm.patchValue({'desc_hn': e});
  }

  uploadImage(file, callback) {
    const fileRef = firebase.storage().ref().child('/test/' + file.name);
    fileRef.put(file)
      .then(callback)
      .catch(error => console.log(error));
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

    const upload = new Promise((resolve, reject) => {
      if (news.thumb1 !== '' && typeof news.thumb1 !== 'string') {
        console.log('upload 1');
        this.uploadImage(news.thumb1[0], (snap1) => {
          console.log('upload complete');
          news.thumb1 = snap1.downloadURL;
          if (news.thumb2 !== '' && typeof news.thumb2 !== 'string') {
            console.log('upload 2');
            this.uploadImage(news.thumb2[0], snap2 => {
              console.log('upload complete');
              news.thumb2 = snap2.downloadURL;
              console.log('upload 3');
              if (typeof news.thumb3 !== 'string') {
                this.uploadImage(news.thumb3[0], snap3 => {
                  console.log('upload complete');
                  news.thumb3 = snap3.downloadURL;
                  resolve();
                });
              }
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
      const url: string = this.api.buildUrl(`news/${this.news._id}/view`);
      this.api.post(url, news).subscribe((response) => {
        if (response.status = 'ok') {
          this.created = true;
        } else {
          this.created = false;
          this.error = response.error;
        }
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
        Validators.required,
        Validators.minLength(100),
      ])),
      desc_hn: new FormControl('', Validators.compose([
        Validators.minLength(1)
      ])),
      thumb1: new FormControl('', Validators.compose([
        // Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'),
      ])),
      thumb2: new FormControl('', Validators.compose([
        // Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'),
      ])),
      thumb3: new FormControl('', Validators.compose([
        // Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'),
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
      category: new FormControl('0'),
      tags: new FormControl(0)

    });
  }


  ngOnInit() {

    this.route.params.subscribe((params) => {

      const newsUrl = this.api.buildUrl(`news/${params.id}/view`);
      this.api.get(newsUrl).subscribe(response => {
        if (response.status = 'ok') {
          this.news = response.data.news;
          this.category = this.news.category;
          if (this.news.thumbnail !== undefined || this.news.thumbnail !== null) {
            this.news.thumbnail = {
              url1 :  ''
            };
          }

          this.newsForm.setValue({
            title: this.news.title,
            desc: this.news.desc,
            desc_hn: this.news.desc_hn,
            author: this.news.author,
            category: this.news.category,
            tags: this.news.tags,
            credits: this.news.credits,
            thumb1: this.news.thumbnail.url1 || '',
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


    const url2 = this.api.buildUrl('/news/tags');
    this.api.get(url2).subscribe(response => {
      this.tags = response.data.tags;
    });


    this.validation();
  }

  ngOnDestroy() {
    this.result = false;
    this.created = null;
  }


}
