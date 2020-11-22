import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">
  <div>
  <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
  <input type="checkbox"
         class="todo-checkbox"
         (click)="completeItem()"
         [checked]="item.completed"/>
  {{item.title}}
</span>
</div>
<button class="btn btn-red" (click)="removeItem()">
  remove
</button>
</div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Input() item: TodoItem;
  constructor() { }

  ngOnInit(): void {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

}
