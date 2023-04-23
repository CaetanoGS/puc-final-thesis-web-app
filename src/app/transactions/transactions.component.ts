import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DashboardService } from '../dashboard/dashboard.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogCreateTransactionComponent } from '../dialog-create-transaction/dialog-create-transaction.component';
import { TransactionsService } from './transactions.service';

export interface DialogData {
  value: number;
  category: string;
  sector: string;
}


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  value: number = 0;
  category: string = "";
  sector: string = "";

  plusIcon = faPlus;
  transactions: any[] = [];

  constructor(public dialog: MatDialog, private dashboardService: DashboardService, private transactionService: TransactionsService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateTransactionComponent, {
      data: {category: this.category, sector: this.sector, value: this.value},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.category = result.category;
      this.value = result.value;
      this.sector = result.sector;
      const backendToken = localStorage.getItem("token");
      this.transactionService.createTransactions(
        backendToken, this.value, this.category, this.sector
      ).subscribe(
        (result) => {
          this.transactions.push(result)
        }
      )

    });
  }

  deleteTransaction(transactionId: number) {
    const backendToken = localStorage.getItem("token");
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
