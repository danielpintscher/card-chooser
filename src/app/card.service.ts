import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

	constructor() { }

	card = {
		number: 111111111111111,
		name: 'Nome',
		expire: '00/00',
		cvv: 123,
		installments: '2x'
	}

	getCard(): Card {
		return this.card;
	}
}
