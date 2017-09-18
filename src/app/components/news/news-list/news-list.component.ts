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
      this.newses = response.data.newses.reverse();
    });
  }

  deleteNews(id: number) {
    const url = this.api.buildUrl(`news/${id}`);
    //NOTE Not Tested
    this.api.del(url).subscribe((response) => {
      if (response.status === 'ok') {
        this.result = true;
      } else {
        this.result = false;
      }
    });
  }

  ngOnDestroy() {
    this.result = null;
  }

}
