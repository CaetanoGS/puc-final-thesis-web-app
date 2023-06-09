import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexFill, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { DashboardService } from './dashboard.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  labels: string[];
};

export type cardChartOptions = {
  series4: ApexAxisChartSeries;
  chart4: ApexChart;
  stroke4: any; //ApexStroke;
  yaxis4: ApexYAxis | ApexYAxis[];
  fill4: ApexFill;
  colors4: string[];
  title4: ApexTitleSubtitle;
  subtitle4: ApexTitleSubtitle;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  transactions: any[] = [];
  debitTransactions: number[] = [];
  creditTransactions: number[] = [];
  investmentTransactions: number[] = [];
  hobbiesTransactions: number[] = [];
  baseCostsTransactions: number[] = [];
  debitTransactionDates: string[] = [];


  baseCostsTotal: number = 0;
  hobbiesCostsTotal: number = 0;
  investmentsTotal: number = 0;

  areaChartOptions: Partial<ChartOptions> | any = {
    series: [
      {
        name: 'Debits',
        data: [],
      },
    ],
    chart: { type: "area", height: "280px" },
    title: { text: "All debits" },
    xaxis: {
      type: "datetime"
    },
    colors: ["#f38b8a"]
  }

  baseCostsChartOptions: Partial<cardChartOptions> | any = {
    series: [{
      name: "Base Costs",
      data: []
    }],
    chart: {
      type: "area",
      height: 160,
      width: 350,
      sparkline: {
        enabled: true
      }
    },
    stroke: null,
    yaxis: {
      min: 0
    },
    fill: {
      opacity: 0.3
    },
    colors: ["#c04c47"],
    title: {
      text: `$0`,
      offsetX: 0,
      style: {
        fontSize: "24px"
      }
    },
    subtitle: {
      text: "Base Costs",
      offsetX: 0,
      style: {
        fontSize: "14px"
      }
    }
  }

  hobbiesCostsChartOptions: Partial<cardChartOptions> | any = {
    series: [{
      name: "Hobbies Costs",
      data: []
    }],
    chart: {
      type: "area",
      height: 160,
      width: 350,
      sparkline: {
        enabled: true
      }
    },
    stroke: null,
    yaxis: {
      min: 0
    },
    fill: {
      opacity: 0.3
    },
    colors: ["#20472c"],
    title: {
      text: "$0",
      offsetX: 0,
      style: {
        fontSize: "24px"
      }
    },
    subtitle: {
      text: "Hobbies Costs",
      offsetX: 0,
      style: {
        fontSize: "14px"
      }
    }
  }

  investmentsChartOptions: Partial<cardChartOptions> | any = {
    series: [{
      name: "Stocks",
      data: []
    }],
    chart: {
      type: "area",
      height: 160,
      width: 350,
      sparkline: {
        enabled: true
      }
    },
    stroke: null,
    yaxis: {
      min: 0
    },
    fill: {
      opacity: 0.3
    },
    colors: ["#9cb7d4"],
    title: {
      text: `$0`,
      offsetX: 0,
      style: {
        fontSize: "24px"
      }
    },
    subtitle: {
      text: "Investments",
      offsetX: 0,
      style: {
        fontSize: "14px"
      }
    }
  }

  constructor(private dashboardService: DashboardService) {}

  //Those functions can become only one

  private pushDebitTransactions(transaction: any) {
    let createdDate = new Date(transaction.createdAt)
    this.debitTransactionDates.push(createdDate.toDateString())
    if (this.debitTransactions.length > 0) {
      const lastValue: number = this.debitTransactions[this.debitTransactions.length - 1];
      let summedValue: number = lastValue + transaction.value;
      this.debitTransactions.push(+summedValue.toFixed(2))
    } else {
      this.debitTransactions.push(transaction.value)
    }
  }

  private pushBaseCostsTransactions(transaction: any){
    if (this.baseCostsTransactions.length > 0) {
      const lastValue: number = this.baseCostsTransactions[this.baseCostsTransactions.length - 1];
      let summedValue: number = lastValue + transaction.value;
      this.baseCostsTransactions.push(+summedValue.toFixed(2))
    } else {
      this.baseCostsTransactions.push(transaction.value)
    }
    this.baseCostsTotal += transaction.value
  }

  private pushHobbiesCosts(transaction: any){
    if (this.hobbiesTransactions.length > 0) {
      const lastValue: number = this.hobbiesTransactions[this.hobbiesTransactions.length - 1];
      let summedValue: number = lastValue + transaction.value;
      this.hobbiesTransactions.push(+summedValue.toFixed(2))
    } else {
      this.hobbiesTransactions.push(transaction.value)
    }
    this.hobbiesCostsTotal += transaction.value;
  }

  private pushInvestments(transaction: any){
    if (this.investmentTransactions.length > 0) {
      const lastValue: number = this.investmentTransactions[this.investmentTransactions.length - 1];
      let summedValue: number = lastValue + transaction.value;
      this.investmentTransactions.push(+summedValue.toFixed(2))
    } else {
      this.investmentTransactions.push(transaction.value)
    }
    this.investmentsTotal += transaction.value;
  }

  private updateBaseCostsTitle(){
    this.baseCostsChartOptions.title.text = `$${this.baseCostsTotal.toFixed(2)}`;
    this.baseCostsChartOptions.title = { ...this.baseCostsChartOptions.title };
  }

  private updateHobbiesTitle(){
    this.hobbiesCostsChartOptions.title.text = `$${this.hobbiesCostsTotal.toFixed(2)}`;
    this.hobbiesCostsChartOptions.title = { ...this.hobbiesCostsChartOptions.title };
  }

  private updateInvestmentTitle(){
    this.investmentsChartOptions.title.text = `$${this.investmentsTotal.toFixed(2)}`;
    this.investmentsChartOptions.title = { ...this.investmentsChartOptions.title };
    console.log(this.investmentsChartOptions)
  }

  private updateTitles() {
    this.updateBaseCostsTitle();
    this.updateHobbiesTitle();
    this.updateInvestmentTitle(); 
  }

  private updateInvestmentsTransactions(){
    this.investmentsChartOptions.series[0].data = this.investmentTransactions;
    this.investmentsChartOptions.series = [...this.investmentsChartOptions.series];
    console.log(this.investmentsChartOptions)
  }

  private updateHobbiesTransactions(){
    this.hobbiesCostsChartOptions.series[0].data = this.hobbiesTransactions;
    this.hobbiesCostsChartOptions.series = [...this.hobbiesCostsChartOptions.series];
  }

  private updateBaseCostsTransactions(){
    this.baseCostsChartOptions.series[0].data = this.baseCostsTransactions;
    this.baseCostsChartOptions.series = [...this.baseCostsChartOptions.series];
  }

  private updateDebitChartOptions(){
    this.areaChartOptions.labels =this. debitTransactionDates;
    this.areaChartOptions.labels = [...this.areaChartOptions.labels];

    this.areaChartOptions.series[0].data = this.debitTransactions;
    this.areaChartOptions.series = [...this.areaChartOptions.series];
  }

  private refreshTransactionsArrays(){
    this.updateBaseCostsTransactions();
    this.updateDebitChartOptions();
    this.updateHobbiesTransactions();
    this.updateInvestmentsTransactions();
  }



  ngOnInit(): void {
    const backendToken = localStorage.getItem("token");
    this.dashboardService.getTransactions(backendToken).subscribe(
      (transactionsResponse) => {
        this.transactions = transactionsResponse.transactions as any[];
        for (let transaction of this.transactions) {
          if (transaction.category === "debit") {this.pushDebitTransactions(transaction)}

          if (transaction.sector === "market" || transaction.sector === "house") {this.pushBaseCostsTransactions(transaction)}

          if (transaction.sector === "hobbies") {this.pushHobbiesCosts(transaction)}

          if (transaction.sector === "stocks") {this.pushInvestments(transaction)}
        }

        this.updateTitles();
        this.refreshTransactionsArrays();
      },
    );
  }
}
