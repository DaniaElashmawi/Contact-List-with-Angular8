import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as JSONdata from '../assets/contacts.json' ;

@Injectable({
  providedIn: 'root'
})
export class ContactsService {


private SRCcontacts = new BehaviorSubject(JSONdata.contacts);
currentContacts = this.SRCcontacts.asObservable();

constructor() { }

 changJSONdata(newContacts: any[]) {
return this.SRCcontacts.next( newContacts);
}


}
