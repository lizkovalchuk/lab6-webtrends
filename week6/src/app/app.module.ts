import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//VERY IMPORTANT. this is from Angular library
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { Lab6Component } from './lab6/lab6.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    Lab6Component
  ],
  imports: [
    BrowserModule,

    //must me imported after the BrowserModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
