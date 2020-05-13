import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactShowComponent } from './contact-show/contact-show.component';


@NgModule({
  declarations: [ContactsComponent, ContactsListComponent, ContactAddComponent, ContactShowComponent],
  imports: [
    SharedModule,
    ContactsRoutingModule,
  ]
})
export class ContactsModule { }
