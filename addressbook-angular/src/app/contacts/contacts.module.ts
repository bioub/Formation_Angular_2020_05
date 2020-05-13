import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ContactsRoutingModule,
  ]
})
export class ContactsModule { }
