import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('check item');
  }
}
