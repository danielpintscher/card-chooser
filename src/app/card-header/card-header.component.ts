import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.less']
})
export class CardHeaderComponent implements OnInit {

	card: Card;

  constructor(private cardService: CardService) { }

  getCard(): void {
  	this.card = this.cardService.getCard();
  }

  ngOnInit() {
  	this.getCard();
  }

}
