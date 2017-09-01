import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import {Contract as API} from '../../api/Contract';
import {Category} from '../../interfaces';
import {RequiredFileInputDirective} from '../../directives/required-file-input.directive';

@Component({
  selector: 'jnex-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  result: Boolean = false;
  newsForm: FormGroup;
  categories: Array<Category>;

  constructor(private api: API) {
  }

  content(e: Event): void {
    this.newsForm.patchValue({'desc': e});
    console.log(this.newsForm.value, this.newsForm.errors);
  }

  createNews(news) {
    console.log('added', news);
  }

  ngOnInit() {
    const url = this.api.buildUrl('/news/categories');
    this.api.get(url).subscribe(response => {
      this.categories = response.data.categories;
    });

    this.validation();
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
      time: new FormControl('5000', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')
      ])),
      thumb1: new FormControl('', Validators.compose([
        RequiredFileInputDirective.validate,
      ])),
      thumb2: new FormControl('', Validators.compose([])),
      thumb3: new FormControl('', Validators.compose([])),
      credits: new FormControl('1', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.min(1)
      ])),
      author: new FormControl('Admin', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),

    });

  }

  ngOnDestroy() {
    this.result = false;
  }

}

