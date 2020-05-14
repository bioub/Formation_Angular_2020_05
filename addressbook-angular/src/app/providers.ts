import { Provider } from '@angular/core';
import { ContactService } from './contacts/shared/contact.service';
import { HttpClient } from '@angular/common/http';

export function contactServiceFactory(httpClient: HttpClient) {
  console.log('useFactory', httpClient);
  return new ContactService(httpClient);
}

export const providers: Provider[] = [
  {
    provide: ContactService,
    useFactory: contactServiceFactory,
    deps: [HttpClient]
  },
];
