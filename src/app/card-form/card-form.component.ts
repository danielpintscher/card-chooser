import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { SendCardService } from '../send-card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.less']
})
export class CardFormComponent implements OnInit {

  cardMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];

  card: Card;

  constructor(private cardService: CardService, private sendCardService: SendCardService) { }

  showCardBack(bool): void {
    this.card.cardBack = bool;
  }

  addCard(): void {
    this.sendCardService.addCard(this.card).subscribe(
      (data: Card) => console.log('Sucesso no cadastro do Cartão'),
      error => console.log('Erro no cadastro do Cartão')
      );
  }

  getCard(): void {
  	this.card = this.cardService.getCard();
  }

  ngOnInit() {
  	this.getCard();
  }
}
