import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { StepsComponent } from './steps/steps.component';
import { FormsModule } from '@angular/forms';
import { CardService } from './card.service';
import { SendCardService } from './send-card.service';
import { TextMaskModule } from 'angular2-text-mask';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardHeaderComponent,
        CardFormComponent,
        StepsComponent
      ],
      imports: [HttpClientTestingModule, FormsModule, TextMaskModule],
      providers: [CardService, SendCardService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
