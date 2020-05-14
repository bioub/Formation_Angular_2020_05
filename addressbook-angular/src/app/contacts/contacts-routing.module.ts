import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactShowComponent } from './contact-show/contact-show.component';
import { ContactsComponent } from './contacts/contacts.component';


// const routes: Routes = [{
//   path: 'contacts',
//   component: ContactsListComponent,
// }, {
//   path: 'contacts/add',
//   component: ContactAddComponent,
// }, {
//   path: 'contacts/:contactId',
//   component: ContactShowComponent,
// }];

const routes: Routes = [{
  path: 'contacts',
  component: ContactsComponent, // dans son template <router-outlet>
  children: [
    {
      path: 'add',  // URL Complète : /contacts/add
      component: ContactAddComponent,
    }, {
      path: ':contactId',
      component: ContactShowComponent,
    }
  ]
}, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
