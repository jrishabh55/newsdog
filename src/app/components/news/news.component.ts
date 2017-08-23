import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import {Contract as API} from '../../api/Contract';
import {Category} from '../../interfaces';

@Component({
  selector: 'jnex-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  result: Boolean = false;
  newsForm: FormGroup;
  categories: Array<Category> = [
    {name: 'test1', id: 1},
    {name: 'test2', id: 2},
    {name: 'test3', id: 3},
    {name: 'test4', id: 4},
    {name: 'test5', id: 5},
    {name: 'test6', id: 6},
    {name: 'test7', id: 7},
    {name: 'test8', id: 8},
    {name: 'test9', id: 9},
  ];

  constructor(private api: API) {
  }

  content(): string {
    return '';
  }

  createNews(news) {
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
        Validators.min(100),
        Validators.pattern('[0-9+]')
      ])),
      thumb1: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      thumb2: new FormControl('', Validators.compose([])),
      thumb3: new FormControl('', Validators.compose([])),
      credits: new FormControl('1', Validators.compose([
        Validators.required,
        Validators.pattern('[0-1+]'),
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

