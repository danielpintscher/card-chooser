import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardService } from './card.service';

import { AppComponent } from './app.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { StepsComponent } from './steps/steps.component';
import { CardFormComponent } from './card-form/card-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    CardHeaderComponent,
    StepsComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
