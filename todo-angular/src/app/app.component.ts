import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Exercice
  // Générer un service Todo
  // Dans ce service ajouter une méthode getAll comme
  // dans ContactService
  // URL : https://jsonplaceholder.typicode.com/todos

  // Injecter ce service dans AppComponent via le constructeur

  // Dans le ngOnInit appeler getAll et les stocker dans le tableau

  todos: Todo[] = [{
    title: 'ABC',
    completed: false,
    id: 123,
  }, {
    title: 'DEF',
    completed: true,
    id: 456,
  }];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getAll().subscribe((todos) => {
      this.todos = [...this.todos, ...todos];
    });
  }

  addTodo(todo) {
    // Changement muable (mutable)
    // this.todos.unshift(todo);

    // Changement immuable (immutable)
    this.todos = [
      todo,
      ...this.todos, // SPREAD tableau ES2015
    ];
  }

  removeTodo(todo) {

  }
}
