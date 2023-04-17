import { Component } from '@angular/core';
import { SideNavToggle, SidenavComponent } from './sidenav/sidenav.component';
import { LoginToggle } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wep-app';

  isSideNavCollapsed: boolean = false;
  screenWidth: number = 0;
  isLoggedin: boolean = true;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  onToggleLoggedIn(data: LoginToggle): void {
    this.isLoggedin = data.isLoggedIn;
  }
}
