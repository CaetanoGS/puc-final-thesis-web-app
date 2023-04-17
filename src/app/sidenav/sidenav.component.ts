import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { faClose, faSignOut, faBars } from '@fortawesome/free-solid-svg-icons';

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
}
