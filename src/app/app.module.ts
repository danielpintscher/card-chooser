import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { StepsComponent } from './steps/steps.component';
import { CardFormComponent } from './card-form/card-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardHeaderComponent,
    StepsComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
