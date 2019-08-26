import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { StepsComponent } from './steps/steps.component';
import { CardFormComponent } from './card-form/card-form.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardHeaderComponent,
    StepsComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
