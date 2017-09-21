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
  error: string;

  constructor(private api: API) {
  }

  ngOnInit() {
    const url = this.api.buildUrl('news');
    this.api.get(url).subscribe((response) => {
      this.newses = response.data.newses.reverse();
      this.result = true;
    });
  }

  deleteNews(id: number) {
    const url = this.api.buildUrl(`news/${id}`);
    //NOTE Not Tested
    this.api.del(url).subscribe((response) => {
      if (response.status === 'ok') {
        this.newses.every((val, index): boolean => {
          if (val._id === id) {
            this.newses.splice(index, 1);
            return false;
          }
          return true;
        });
      } else {
        this.error = response.error;
      }
    });
  }

  ngOnDestroy() {
    this.result = null;
  }

}
