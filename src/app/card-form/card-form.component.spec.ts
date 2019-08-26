import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardService } from '../card.service';
import { SendCardService } from '../send-card.service';
import { TextMaskModule } from 'angular2-text-mask';

import { CardFormComponent } from '../card-form/card-form.component';


describe('CardFormComponent', () => {
  let component: CardFormComponent;
  let fixture: ComponentFixture<CardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CardFormComponent
      ],
      imports: [HttpClientTestingModule, FormsModule, TextMaskModule],
      providers: [CardService, SendCardService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CardFormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
