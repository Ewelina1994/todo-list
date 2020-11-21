import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span><h1>{{title}} app is running</h1></span>

  <app-input-button-unit></app-input-button-unit>

  <ul>
    <li *ngFor="let todoItem of todoList">
      {{ todoItem.title }}
    </li>
  </ul>
  <h1 *ngIf="userLoggedIn">Welcome!</h1>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-list';
  subtitle='word';
  userLoggedIn=true;

  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  ngOnInit(): void {
    this.title='Nowy tytuł';
    throw new Error('Method not implemented.');
  }

}
