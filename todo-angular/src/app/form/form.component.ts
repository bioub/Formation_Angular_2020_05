import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() add = new EventEmitter<Todo>();

  todo: Todo = {
    title: '',
    completed: false,
  };

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
}
