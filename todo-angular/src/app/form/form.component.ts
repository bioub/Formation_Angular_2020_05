import { Component, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, DoCheck {

  @Output() add = new EventEmitter<Todo>();

  // todo: Todo = {
  //   title: '',
  //   completed: false,
  // };
  todo = new Todo();

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {
    // ES2018 SPREAD Object
    this.add.emit({
      ...this.todo, // affecter toutes les clés de this.todo
      id: Math.floor(Math.random() * 1000),
    });
  }

  ngDoCheck() {
    console.log('check form');
  }
}
