export class CardConfig {
	private static cardConfig: any = {
		"visa": "./assets/cards/Image 1.png",
		"mastercard": "./assets/cards/Image 1.png",
		"alelo": "./assets/cards/Image 1.png",
		"amex": "./assets/cards/Image 1.png"
	}

	static getCardConfig(flg): any {
		return this.cardConfig[flg];
	}
}
