import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

export interface LoginToggle {
  isLoggedIn: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  @Output() onToggleLoggedIn: EventEmitter<LoginToggle> = new EventEmitter();

  isLoggedIn: boolean = false;
  loginUsername: string = "";
  loginPassword: string = ""

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      this.onToggleLoggedIn.emit({ isLoggedIn: true })
      this.router.navigate(['/dashboard'])
    } else {
      this.onToggleLoggedIn.emit({ isLoggedIn: false })
    }
  }

  login() {
    this.loginService.login(this.loginUsername, this.loginPassword).subscribe(
      (data) => {
        if (data && data.token) {
          localStorage.setItem("token", data.token);
          window.location.href = "/dashboard"
        }
      },
    )
  }
}
