import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit, AfterViewChecked {

  prenom = 'Romain';

  prenoms = ['Jean', 'Eric'];

  @ViewChild('ngModelPrenom') ngModelPrenom: NgModel;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    console.log(this.ngModelPrenom.value);
  }

}
