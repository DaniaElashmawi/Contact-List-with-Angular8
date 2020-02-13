import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
contacts: any[] ;
  constructor( public _ContactsService: ContactsService ) {
  }

  onSubmit(formData) {

    let newContact = {
    name: formData.contFirstName + ' ' + formData.contLastName,
    phone: formData.contKey + ' ' + formData.contPhone };
    this.contacts.push(newContact);
    this._ContactsService.changJSONdata(this.contacts);

    console.log(this.contacts);

  }

  ngOnInit() {
    this._ContactsService.currentContacts.subscribe(cont => this.contacts = cont );
}
}
