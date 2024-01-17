import { Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  @Output() openNav = new EventEmitter<boolean>();

  setIsOpenedNav() {
    this.openNav.emit();
  }
}
