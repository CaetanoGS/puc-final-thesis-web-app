import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../transactions/transactions.component';

@Component({
  selector: 'app-dialog-create-transaction',
  templateUrl: './dialog-create-transaction.component.html',
  styleUrls: ['./dialog-create-transaction.component.scss']
})
export class DialogCreateTransactionComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogCreateTransactionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
