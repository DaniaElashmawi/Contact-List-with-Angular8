import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewContactComponent} from './new-contact/new-contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '' , pathMatch:  'full' , component: HomeComponent },
  { path: 'newContact', pathMatch:  'full' , component : NewContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
