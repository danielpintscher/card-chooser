import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { CardConfig } from '../card-config';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.less']
})
export class CardHeaderComponent implements OnInit {

	card: Card;

  constructor(private cardService: CardService) { }

  getImageFlag(flg): String {
      return CardConfig.getCardConfig(flg);
  }

  formatCardNumber(number): String {
    if (!number) return '**** **** **** ****';
    return number;
  }

  formatCardName(name): String {
    if (!name) return 'Nome do titular';
    return name;
  }

  formatCardExpire(exp): String {
    if (!exp) return '00/00';
    return exp;
  }

  getCard(): void {
  	this.card = this.cardService.getCard();
  }

  ngOnInit() {
  	this.getCard();
  }

}
