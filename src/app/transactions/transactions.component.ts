import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  series: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];
  chart: ApexChart = { type: "pie", width: "100%", height: "310px" };
  title: ApexTitleSubtitle = { text: "Costs" };
  labels: any = ["Team A", "Team B", "Team C", "Team D", "Team E"];
  responsive: ApexResponsive = { breakpoint: 480 }

  plusIcon = faPlus;
  transactions: any[] = []

  constructor(private dashboardService: DashboardService) { }

  deleteTransaction(transactionId: number) {
    const backendToken = localStorage.getItem("token")
    this.dashboardService.deleteTransaction(transactionId, backendToken).subscribe(
      () => {
        const transactionIndex = this.transactions.findIndex((t) => t.id === transactionId)
        this.transactions.splice(transactionIndex, 1);
      }
    );
  }

  ngOnInit(): void {
    const backendToken = localStorage.getItem("token")
    this.dashboardService.getTransactions(backendToken).subscribe(
      (transactionsResponse) => {
        this.transactions = transactionsResponse.transactions as any[];
      }
    );
  }


}
