import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact';
import { switchMap, map } from 'rxjs/operators';

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
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   const id = paramMap.get('contactId'); // route -> :contactId
    //   this.contactService.getById(id).subscribe((contact) => {
    //     this.contact = contact;
    //   });
    // });

    // --------{get() {1}}-------{get() {2}}--------{get() {3}}---------...
    // map((paramMap) => paramMap.get('contactId')),
    // --------{   1     }-------{    2    }--------{    3    }---------
    // ----------------------{id:1, name:'L'}---------------------{id: 3,name:'C'}-------{id: 2,name:'E'}
    // switchMap((id) => this.contactService.getById(id))
    // ----------------------{id:1, name:'L'}---------------------{id: 3,name:'C'}----------...

    // LearnRxjs.io videos

    this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('contactId')),
        switchMap((id) => this.contactService.getById(id))
      )
      .subscribe((contact) => {
        this.contact = contact;
      });
  }
}
