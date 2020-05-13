import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../shared/contact';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  // private title: Title;
  // private httpClient: HttpClient;

  // constructor(title: Title, httpClient: HttpClient) {
  //   this.title = title;
  //   this.httpClient = httpClient;
  // }

  contacts: Contact[] = [];

  constructor(private title: Title, private contactService: ContactService) {}

  ngOnInit(): void {
    this.title.setTitle('Contacts List');
    this.contactService.getAll()
      .subscribe((contacts) => {
        this.contacts = contacts;
      });
  }
}
