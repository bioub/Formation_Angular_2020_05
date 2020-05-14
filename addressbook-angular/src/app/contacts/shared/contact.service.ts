import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
// @Injectable()
export class ContactService {

  events = {
    add: new EventEmitter<Contact>(),
  };

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Contact[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  getById(id) {
    const request$ = this.httpClient.get<Contact>(
      'https://jsonplaceholder.typicode.com/users/' + id
    );

    if (id === '2') {
      // -----{}------
      // delay(4000)
      // ---------------------{}----
      return request$.pipe(delay(4000));
    }

    return request$;
  }

  create(contact) {
    return this.httpClient.post<Contact>(
      'https://jsonplaceholder.typicode.com/users',
      contact
    );
  }
}
