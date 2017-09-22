import { Component, OnInit } from '@angular/core';
import { Contract as API } from '../../api/Contract';

@Component({
  selector: 'jnex-withdrawal-request',
  templateUrl: './withdrawal-request.component.html',
  styleUrls: ['./withdrawal-request.component.css']
})
export class WithdrawalRequestComponent implements OnInit {

  result: boolean;
  withdraw;

  constructor(private api: API) { }

  delete(data: {id: number}) {
    const url = this.api.buildUrl('news/withdraw/' + data.id);
    this.api.del(url).subscribe(response => {
      if (response.status === 'ok') {
        this.result = true;
      } else {
        this.result = false;
      }
    });
  }

  ngOnInit() {
    const url = this.api.buildUrl('withdraw');
    this.api.get(url).subscribe(response => {
      if (response.status === 'ok') {
        this.withdraw = response.data;
      } else {
        this.withdraw = null;
      }
    });
  }

}
