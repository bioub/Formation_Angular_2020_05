import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tri-state-button',
  templateUrl: './tri-state-button.component.html',
  styleUrls: ['./tri-state-button.component.css']
})
export class TriStateButtonComponent implements OnInit {

  values = ['Oui', 'Non', 'Peut-être']

  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.selectedIndex = (this.selectedIndex + 1) % this.values.length;
  }
}
