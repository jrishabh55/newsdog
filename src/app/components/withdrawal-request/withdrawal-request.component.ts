import { Component, OnInit } from '@angular/core';
import { Contract as API } from '../../api/Contract';
import { WithdrawalRequest } from '../../Interfaces';

@Component({
  selector: 'jnex-withdrawal-request',
  templateUrl: './withdrawal-request.component.html',
  styleUrls: ['./withdrawal-request.component.css']
})
export class WithdrawalRequestComponent implements OnInit {

  result: boolean;
  withdrawRequests: Array<WithdrawalRequest>;
  error: string;

  constructor(private api: API) {}

  pay(id: number) {
    const url = this.api.buildUrl(`withdraw/${id}`);
    this.api.post(url).subscribe(response => {
      if (response.status === 'ok') {
        this.withdrawRequests.every((val, index): boolean => {
          if (val._id === id) {
            this.withdrawRequests.splice(index, 1);
            return false;
          }
          return true;
        });
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
        this.withdrawRequests = response.data.withdrawRequests;
      } else {
        this.withdrawRequests = null;
        this.error = response.error;
      }
    });
  }

}
