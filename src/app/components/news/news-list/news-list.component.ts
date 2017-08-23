import {Component, OnDestroy, OnInit} from '@angular/core';
import {News} from '../../../Interfaces';
import {Contract as API} from '../../../api/Contract';

@Component({
  selector: 'jnex-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnDestroy {

  newses: Array<News>;
  result: Boolean = false;

  constructor(private api: API) {
  }

  ngOnInit() {
    const url = this.api.buildUrl('news');
    this.api.get(url).subscribe((response) => {
      this.newses = response.data.news;
      this.result = true;
    });
  }

  ngOnDestroy() {
    this.result = false;
  }

}
