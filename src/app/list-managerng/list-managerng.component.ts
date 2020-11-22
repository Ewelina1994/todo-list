import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-managerng',
  template: `
  <div class="todo-app">
  <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
  <ul>
    <li *ngFor="let todoItem of todoList">
    <app-todo-item [item]="todoItem"></app-todo-item>
    </li>
  </ul>
  </div>
  `,
  styleUrls: ['./list-managerng.component.scss']
})
export class ListManagerngComponent implements OnInit {

  constructor() { }

  userLoggedIn=true;

  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  ngOnInit(): void {
  }

  addItem(title: string) {
    this.todoList.push({ title });
  }

}
