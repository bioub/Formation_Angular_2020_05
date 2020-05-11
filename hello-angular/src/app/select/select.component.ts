import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  items = ['Rouge', 'Vert', 'Bleu'];
  selected;

  opened = false;

  constructor() { }

  ngOnInit(): void {
    if (!this.items.length) {
      throw new Error('items must contain at least on item');
    }

    this.selected = this.selected ?? this.items[0];
  }

  handleSelect(item) {
    this.selected = item; 
    this.opened = false
  }

}
