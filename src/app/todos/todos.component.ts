import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
         text: "Pick chukti from office"
      },
      {
        text: "Meet her after office"
      },
      {
        text: "Dinner at office"
      }
    ];
  }

}
