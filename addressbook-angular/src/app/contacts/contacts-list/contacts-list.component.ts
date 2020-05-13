import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../shared/contact';

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

  constructor(private title: Title, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.title.setTitle('Contacts List');
    this.httpClient.get<Contact[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((contacts) => {
        this.contacts = contacts;
      });
  }
}
