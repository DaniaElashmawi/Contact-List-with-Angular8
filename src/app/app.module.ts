import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // all contacts - component
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // search-module

import { HttpClientModule } from '@angular/common/http';

import { NewContactComponent } from './new-contact/new-contact.component';
import { HomeComponent } from './home/home.component'; // add new contact - component

@NgModule({
  declarations: [
    AppComponent,
    NewContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
     ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
