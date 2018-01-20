import { Injectable } from '@angular/core';
import { Init } from './init.todo'

@Injectable()
export class TodoService extends Init {

  constructor() { 
  	super()
  	console.log("Todo service initialized")
  	this.load()
  }


  getTodos() {
  	var todos = JSON.parse(localStorage.getItem('todos'));
  	return todos;
  }
}
