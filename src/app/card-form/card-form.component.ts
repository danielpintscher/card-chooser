import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.less']
})
export class CardFormComponent implements OnInit {

  card: Card;

  constructor(private cardService: CardService) { }

  getCard(): void {
  	this.card = this.cardService.getCard();
  }

  ngOnInit() {
  	this.getCard();
  }
}
