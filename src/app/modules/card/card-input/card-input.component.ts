import { Component, Output, EventEmitter ,Input} from '@angular/core';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrl: './card-input.component.scss'
})
export class CardInputComponent {
  @Input() name : string = '';
  @Output() addToCart = new EventEmitter<string>();
  onAddCard(){
    this.addToCart.emit(this.name);
    this.name = '';
  }
}
