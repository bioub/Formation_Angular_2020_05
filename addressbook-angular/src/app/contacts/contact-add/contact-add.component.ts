import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact';
import { ContactService } from '../shared/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss'],
})
export class ContactAddComponent implements OnInit {
  contact = new Contact();

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {}

  handleSubmit() {
    this.contactService.create(this.contact).subscribe((contact) => {
      this.contactService.events.add.emit(contact);
      this.router.navigate(['contacts']);
      // this.router.navigate(['contacts', contact.id]); // -> show du contact créé
      // this.router.navigateByUrl('/contacts/123');
    });
  }
}
