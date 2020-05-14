import { Component, OnInit, Input, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, DoCheck {

  @Input() items: Todo[];

  // Vérification OnPush
  // items.previousValue === items.currentValue

  // Vérification Default
  // deepEqual(items.previousValue, items.currentValue)

  constructor() { }

  ngOnInit(): void {

  }

  ngDoCheck() {
    console.log('check list');
  }

}
