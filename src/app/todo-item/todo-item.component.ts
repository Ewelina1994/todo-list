import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">
    {{ item.title }}
    </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  constructor() { }

  ngOnInit(): void {
  }

}
