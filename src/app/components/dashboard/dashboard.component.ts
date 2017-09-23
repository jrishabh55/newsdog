import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Contract as API } from '../../api/Contract';
import { Dashboard } from '../../Interfaces';

@Component({
  selector: 'jnex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: Dashboard = null;
  date: string;

  constructor(private api: API, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.date = new Date(Date.now()).toLocaleString();

    this.dashboardService.getData().subscribe(response => {
      this.data = response.data.dashboard;
    });
  }
}
