import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
  constructor() { }
  isOpenedNav : boolean = true;
  setOpenedNav(){
    this.isOpenedNav = !this.isOpenedNav
  }
}
