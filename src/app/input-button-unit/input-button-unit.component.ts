import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <div class="todo-item">
  <input class="todo-input"
        #inputElementRef
        [value]="task"
         (keyup.enter)="changeTitle($event.target.value)"
         inputElementRef.value=''>

  <button class="btn" (click)="changeTitle(inputElementRef.value)">
    Save
  </button>
  </div>
  `,

  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  task:string='';

  constructor() {
  }

  ngOnInit(): void {

  }

  // changeTitle(event) {
  //   console.log(event);
  //   this.title = event.target.value; // the original functionality still works
  // }

  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
    this.task=newTitle;
    this.task=' ';
  }

  generateTitle(): string {
    return this.task;
  }

}
