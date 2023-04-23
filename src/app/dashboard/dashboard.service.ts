import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';


export interface TransactionInterface {
  id: string;
  value: number;
  category: string;
  sector: string;
  walletId: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  transactions: any[] = []

  constructor(private http: HttpClient, private router: Router) { }

  deleteTransaction(transactionId: number, backendToken: any = undefined): Observable<any> {
    if(!backendToken)
      throw Error("Token is not defined");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${backendToken}`
    });

  const requestOptions = { headers: headers };
    return this.http.delete(
        `/api/transactions/${transactionId}`,
        requestOptions
    )
  }

  getTransactions(backendToken: any = undefined): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${backendToken}`,
      'Access-Control-Allow-Origin': "*"
    }
    
    return this.http.get("/api/transactions", {headers})
  }
}
