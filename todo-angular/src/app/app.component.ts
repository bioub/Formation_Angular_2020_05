import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [{
    title: 'ABC',
    completed: false,
    id: 123,
  }, {
    title: 'DEF',
    completed: true,
    id: 456,
  }];

  addTodo(todo) {
    this.todos.unshift(todo);
  }

  removeTodo(todo) {
    
  }
}
