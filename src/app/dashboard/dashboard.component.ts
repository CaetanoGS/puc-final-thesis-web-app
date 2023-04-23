import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexFill, ApexNonAxisChartSeries, ApexResponsive, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  series: ApexAxisChartSeries = [
    {
      name: "Debits",
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: "Credits",
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ];
  chart: ApexChart = { type: "area", height: "280px" };
  title: ApexTitleSubtitle = { text: "Costs" };

  series2: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];
  chart2: ApexChart = { type: "pie", width: "100%", height: "310px" };
  title2: ApexTitleSubtitle = { text: "Costs" };
  labels: any = ["Team A", "Team B", "Team C", "Team D", "Team E"];
  responsive: ApexResponsive = { breakpoint: 480 }

  series3: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];
  chart3: ApexChart = { type: "pie", width: "100%", height: "310px" };
  title3: ApexTitleSubtitle = { text: "Costs" };
  labels3: any = ["Team A", "Team B", "Team C", "Team D", "Team E"];
  responsive3: ApexResponsive = { breakpoint: 480 }


  series4: ApexAxisChartSeries = [{
    name: "chart-big-sparkline",
    data: [1, 2, 1, 5, 3, 4, 8]
  }];
  chart4: ApexChart = {
    type: "area",
    height: 160,
    width: 350,
    sparkline: {
      enabled: true
    }
  };
  stroke4: any; //ApexStroke;
  yaxis4: ApexYAxis | ApexYAxis[] = {
    min: 0
  };
  fill4: ApexFill = {
    opacity: 0.3
  };
  colors4: string[] = ["#c04c47"];
  title4: ApexTitleSubtitle = {
    text: "$324,652",
    offsetX: 0,
    style: {
      fontSize: "24px"
    }
  };
  subtitle4: ApexTitleSubtitle = {
    text: "Base Costs",
    offsetX: 0,
    style: {
      fontSize: "14px"
    }
  };


  series6: ApexAxisChartSeries = [{
    name: "chart-big-sparkline",
    data: [1, 2, 1, 5, 3, 4, 8]
  }];
  chart6: ApexChart = {
    type: "area",
    height: 160,
    width: 350,
    sparkline: {
      enabled: true
    }
  };
  stroke6: any; //ApexStroke;
  yaxis6: ApexYAxis | ApexYAxis[] = {
    min: 0
  };
  fill6: ApexFill = {
    opacity: 0.3
  };
  colors6: string[] = ["#20472c"];
  title6: ApexTitleSubtitle = {
    text: "$824,652",
    offsetX: 0,
    style: {
      fontSize: "24px"
    }
  };
  subtitle6: ApexTitleSubtitle = {
    text: "Investments",
    offsetX: 0,
    style: {
      fontSize: "14px"
    }
  };


  series5: ApexAxisChartSeries = [{
    name: "chart-big-sparkline",
    data: [1, 2, 1, 5, 3, 4, 8]
  }];
  chart5: ApexChart = {
    type: "area",
    height: 160,
    width: 350,
    sparkline: {
      enabled: true
    }
  };
  stroke5: any; //ApexStroke;
  yaxis5: ApexYAxis | ApexYAxis[] = {
    min: 0
  };
  fill5: ApexFill = {
    opacity: 0.3
  };
  colors5: string[] = ["#9cb7d4"];
  title5: ApexTitleSubtitle = {
    text: "$24,652",
    offsetX: 0,
    style: {
      fontSize: "24px"
    }
  };
  subtitle5: ApexTitleSubtitle = {
    text: "Hobbies",
    offsetX: 0,
    style: {
      fontSize: "14px"
    }
  };

  transactions: any[] = []

  constructor(private dashboardService: DashboardService) {
    const backendToken = localStorage.getItem("token")
    this.dashboardService.getTransactions(backendToken).subscribe(
      (transactionsResponse) => {
        this.transactions = transactionsResponse.transactions as any[];
      },
    )
  }

  deleteTransaction(transactionId: number){
    const backendToken = localStorage.getItem("token")
    this.dashboardService.deleteTransaction(transactionId, backendToken).subscribe(
      () => {
        const transactionIndex = this.transactions.findIndex((t) => t.id === transactionId)
        this.transactions.splice(transactionIndex, 1);
      }
    );
  }

  ngOnInit(): void {

  }

}
