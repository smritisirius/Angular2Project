import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldTest;
  appState = 'default'
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo() {
    var newTodo = {
      text: this.text
    }
    this.text = ''
    this.todos.push(newTodo);
    this._todoService.addTodo(newTodo)
  }

  deleteTodo(todoText) {
    for(var i = 0; i < this.todos.length; ++i) {
      if (this.todos[i].text == todoText) {
        this.todos.splice(i, 1);
      }
    }
    this._todoService.deleteTodo(todoText)
  }

  editTodo(todo) {
    this.appState = 'edit'
    this.text = todo.text
    this.oldTest = todo.text
    console.log(this.appState)
  }

  updateTodo() {
    console.log(this.text)
     for(var i = 0; i < this.todos.length; ++i) {
      if (this.todos[i].text == this.oldTest) {
        this.todos[i].text = this.text
      }
    }
    this._todoService.updateTodo(this.oldTest, this.text)
  }

}
