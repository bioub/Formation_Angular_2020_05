import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-contact-show',
  templateUrl: './contact-show.component.html',
  styleUrls: ['./contact-show.component.scss'],
})
export class ContactShowComponent implements OnInit {
  contact: Contact;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    // à un instant t
    // this.activatedRoute.snapshot.paramMap

    // dans le temps
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('contactId'); // route -> :contactId
      this.contactService.getById(id).subscribe((contact) => {
        this.contact = contact;
      });
    });
  }
}
