import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
        "http://localhost:3000/api/authenticate",
        {
            username: username,
            password: password
        }
    )
}
}
