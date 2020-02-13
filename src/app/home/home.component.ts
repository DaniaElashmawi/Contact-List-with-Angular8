import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {ContactsService} from '../contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {
  contacts: any[];
  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
   'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  searchValue: string;
   index = true;
 letterInfo ;
  constructor(private _ContactsService: ContactsService) {}

   checkLetter(letterSec, cont) {
     if (cont.name.charAt(0).toUpperCase() === letterSec) {
                  return cont;
                }
   }


   jumpToLetter(letter , myLetters: HTMLCollection) {
   myLetters = document.getElementsByClassName('theLetters');
   for (let i = 0 ; i <= myLetters.length ; i++ ) {
    if ( myLetters[i] !== undefined && letter === myLetters[i].innerHTML ) {
      myLetters[i].scrollIntoView({block: 'center'});
    }
  }

  }

     ngOnInit() {
      this._ContactsService.currentContacts.subscribe(cont => this.contacts = cont);
      console.log(this.contacts);

      $('.cont-search input').on('focus', () => {this.index = false; });
      $('.cont-search input').on('focusout', () => {this.index = true; });
  }

  }
