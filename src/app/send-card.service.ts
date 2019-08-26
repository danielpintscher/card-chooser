import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendCardService {

	addCardUrl = 'https://www.mocky.io/v2/5185415ba171ea3a00704eed';

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer eyhdq9d9w8u+=-edwe'
		})
	};

	constructor(private _http: HttpClient) { }

	addCard (card): any {

		var url = this.addCardUrl;
		var body = JSON.stringify(card);
		var headers = this.httpOptions;

	  return this._http.post(url, body, headers);
	}
}
