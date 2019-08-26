import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

	constructor() { }

	card = {
		flag: 'visa',
		number: null,
		name: '',
		expire: '',
		cvv: null,
		installments: '2x',
		cardBack: false,
		cardAtive: false
	}

	getCard(): Card {
		return this.card;
	}
}
