import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

export interface LoginToggle {
  isLoggedIn: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  @Output() onToggleLoggedIn: EventEmitter<LoginToggle> = new EventEmitter();
  isLoggedIn: boolean = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    const token: string | null = localStorage.getItem("token");
    if(token){
      this.onToggleLoggedIn.emit({isLoggedIn: true})
      this.router.navigate(['/dashboard'])
    }else {
      this.onToggleLoggedIn.emit({isLoggedIn: false})
    }
  }
}
