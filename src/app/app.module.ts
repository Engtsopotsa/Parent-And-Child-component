import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeveragesComponent } from './beverages/beverages.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BeveragesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
