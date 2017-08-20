import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import {Contract as API} from '../../api/Contract';

@Component({
  selector: 'jnex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: Object;
  constructor(private api: API, private dashboardService: DashboardService) { }
  ngOnInit(): void {

    this.data = this.dashboardService.getData();
  }
}
