import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


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
export class TransactionsService {

    constructor(private http: HttpClient) { }

    createTransactions(backendToken: any = undefined, value: number, category: string, sector: string): Observable<any> {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${backendToken}`,
            'Access-Control-Allow-Origin': "*"
        }

        return this.http.post(
            "/api/transactions",
            {
                value: Number(value),
                category: category,
                sector: sector
            },
            { headers }
        )
    }
}
