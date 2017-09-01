import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import {Contract as API} from '../../api/Contract';
import {Category} from '../../interfaces';
import {RequiredFileInputDirective} from '../../directives/required-file-input.directive';

@Component({
  selector: 'jnex-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterViewInit, OnDestroy {

  result: Boolean = false;
  newsForm: FormGroup;
  categories: Array<Category>;
  created: Boolean = null;
  error: string;

  constructor(private api: API) {
  }

  selectCategory(id: Event) {
    this.newsForm.patchValue({category: id});
  }

  content(e: Event): void {
    this.newsForm.patchValue({'desc': e});
  }

  createNews(news) {
    console.log(news.thumb1);
    const url: string = this.api.buildUrl('news/add');
    this.api.post(url, news).subscribe((response) => {
      if (response.status = 'ok') {
        this.created = true;
      }else {
        this.created = false;
        this.error = response.error;
      }
      window.scrollTo(0,0);
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
    const url = this.api.buildUrl('/news/categories');
    this.api.get(url).subscribe(response => {
      this.categories = response.data.categories;
    });

    this.validation();
  }

  ngAfterViewInit(): void {
    // this.selectCategory(this.categories[0]._id);
  }

  ngOnDestroy() {
    this.result = false;
    this.created = null;
  }

}

