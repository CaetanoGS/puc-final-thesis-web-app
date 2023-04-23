import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface LoginResponse {
  token: string;
}

export interface SignUpResponse {
  id: string,
  email: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      "/api/authenticate",
      {
        username: username,
        password: password
      }
    );
  }

  signup(name: string, username: string, password: string): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(
      "/api/users/signup",
      {
        username: username,
        password: password,
        name: name
      }
    );
  }
}
