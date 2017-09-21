import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contract as API} from '../../api/Contract';
import {Category, Tag} from '../../interfaces';
import * as firebase from 'firebase';

@Component({
  selector: 'jnex-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  result: Boolean = false;
  newsForm: FormGroup;
  categories: Array<Category>;
  tags: Array<Tag> = [];
  created: Boolean = null;
  error: string;

  constructor(private api: API) {
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

  uploadImage(file, callback) {
    const fileRef = firebase.storage().ref().child('/test/' + file.name);
    fileRef.put(file)
      .then(callback)
      .catch(error => console.log(error));
  }

  createNews(news) {
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
      if (news.thumb1 !== '') {
        console.log('upload 1');
        this.uploadImage(news.thumb1[0], (snap1) => {
          console.log('upload complete');
          news.thumb1 = snap1.downloadURL;
          if (news.thumb2 !== '') {
            console.log('upload 2');
            this.uploadImage(news.thumb2[0], snap2 => {
              console.log('upload complete');
              news.thumb2 = snap2.downloadURL;
              console.log('upload 3');
              this.uploadImage(news.thumb3[0], snap3 => {
                console.log('upload complete');
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
        Validators.minLength(1),
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
      tags: new FormControl('0'),
    });
  }


  ngOnInit() {

    const url1 = this.api.buildUrl('/news/categories');

    this.api.get(url1).subscribe(response => {
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
