import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTitleSubtitle
} from "ng-apexcharts";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {

  series: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];
  chart: ApexChart = { type: "pie", width: "100%", height: "310px" };
  title: ApexTitleSubtitle = { text: "Costs" };
  labels: any = ["Team A", "Team B", "Team C", "Team D", "Team E"];
  responsive: ApexResponsive = { breakpoint: 480 }
  
}
