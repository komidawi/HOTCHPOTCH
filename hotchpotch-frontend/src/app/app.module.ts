import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaCalculatorComponent } from './pizza-calculator/pizza-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
