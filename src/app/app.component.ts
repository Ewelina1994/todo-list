import { Component, OnInit } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
  <span><h1 class="app-title">{{title}}</h1></span>
  <app-list-managerng></app-list-managerng>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-list';

  ngOnInit(): void {
    this.title='Todo list';
    throw new Error('Method not implemented.');
  }

}
