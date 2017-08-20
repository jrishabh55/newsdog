import {Component, OnInit} from '@angular/core';
import {News} from '../../../Interfaces';

@Component({
  selector: 'jnex-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newses: Array<News>;

  constructor() {
  }

  ngOnInit() {
    this.newses = [
      {
        title: 'this title',
        desc: 'This is an desc',
        author: 'Rishabh',
        category: '1st',
        created_at: Date.parse('today'),
        credits: 10,
        time: 1000,
        thumbnail: {url1: 'urlthumb'},
        meta: {votes: 12, favs: 200}
      },
      {
        title: 'this title',
        desc: 'This is an desc',
        author: 'Rishabh',
        category: '1st',
        created_at: Date.parse('today'),
        credits: 10,
        time: 1000,
        thumbnail: {url1: 'urlthumb'},
        meta: {votes: 12, favs: 200}
      },
      {
        title: 'this title',
        desc: 'This is an desc',
        author: 'Rishabh',
        category: '1st',
        created_at: Date.parse('today'),
        credits: 10,
        time: 1000,
        thumbnail: {url1: 'urlthumb'},
        meta: {votes: 12, favs: 200}
      },
      {
        title: 'this title',
        desc: 'This is an desc',
        author: 'Rishabh',
        category: '1st',
        created_at: Date.parse('today'),
        credits: 10,
        time: 1000,
        thumbnail: {url1: 'urlthumb'},
        meta: {votes: 12, favs: 200}
      },
      {
        title: 'this title',
        desc: 'This is an desc',
        author: 'Rishabh',
        category: '1st',
        created_at: Date.parse('today'),
        credits: 10,
        time: 1000,
        thumbnail: {url1: 'urlthumb'},
        meta: {votes: 12, favs: 200}
      },
    ];
  }

}
