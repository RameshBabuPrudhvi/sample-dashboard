import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard A',  icon: 'dashboard', class: '' },
    { path: '/dashboard-b', title: 'Dashboard B',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list-a', title: 'Table List A',  icon:'content_paste', class: '' },
    { path: '/table-list-b', title: 'Table List B',  icon:'content_paste', class: '' },
//    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
//    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewChecked {
  menuItems: any[];
  routerPath: string = '';

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    
  }
  ngAfterViewChecked() {
    this.routerPath = window.location.href.split('#')[1];
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
