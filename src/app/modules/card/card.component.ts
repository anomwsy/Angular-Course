import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cards : {id : string, name : string}[] = [];
  cardName : string = '';
  constructor() {
  }

  addCard(value : string) {
    if(value !== '') {

      this.cards.push(
        {id : new Date().toString()+Math.random().toString(), name : value}
      );
    }
  }

  removeCardWithIndex(value : number){
    this.cards.splice(value, 1);
  }
  removeCard(value :string){
    this.cards = this.cards.filter(card => card.id !== value);
  }
}
