import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  // Exercice
  // 1 / items et selected soient des Input
  // et qu'elles recoivent de App choices et choice respectivement

  // 2 / Créer un ouput selectedChange et emettre la valeur
  // selectionnée au moment du clic
  // Dans App stocker cette valeur dans choice de façon à l'afficher

  // 3 / Utiliser le Banana in a box [()] dans App

  items = ['Rouge', 'Vert', 'Bleu'];
  selected;

  opened = false;

  constructor() { }

  ngOnInit(): void {
    if (!this.items.length) {
      throw new Error('items must contain at least on item');
    }

    this.selected = this.selected ?? this.items[0];

    // ?? Nullish Coalescing operator
    // Nouveaute de TypeScript 3.7 et de ECMAScript 2020

    // Ressemble au ||
    // this.selected = this.selected || this.items[0];
    // Affecter la 2e valeur si la première est falsy
    // falsy : false, 0, '', null, undefined
    // 'Rouge' || 'Rouge' => 'Rouge'
    // '' || 'Rouge' => 'Rouge'
    // undefined || 'Rouge' => 'Rouge'

    // this.selected = this.selected ?? this.items[0];
    // Affecter la 2e valeur si la première est nullish
    // nullish : null, undefined
    // 'Rouge' || 'Rouge' => 'Rouge'
    // '' || 'Rouge' => ''
    // undefined || 'Rouge' => 'Rouge'
  }

  handleSelect(item) {
    this.selected = item; 
    this.opened = false
  }

}
