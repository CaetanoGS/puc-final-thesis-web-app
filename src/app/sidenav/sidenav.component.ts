import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { faClose, faSignOut, faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

export interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed: boolean = false;
  screenWidth: number = 0;
  navData = navbarData;
  closeIcon = faClose;
  logoutIcon = faSignOut;
  menuIcon = faBars;

  constructor(private router: Router) {}

  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  logout(): void {
    localStorage.clear();
    window.location.href = '/login';
  }
}
