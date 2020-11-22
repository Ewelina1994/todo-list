import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <p>{{title}}</p>
  <input class="todo-input"
        #inputElementRef
         [value]="title"
         (keyup.enter)="changeTitle($event.target.value)">

  <button class="btn" (click)="changeTitle(inputElementRef.value)">
    Save
  </button>
  `,

  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title='Hello World';
  constructor() {
    this.title='I love Angular'
  }

  ngOnInit(): void {
    this.title='Angular CLI Rules!';
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }

  // changeTitle(event) {
  //   console.log(event);
  //   this.title = event.target.value; // the original functionality still works
  // }

  changeTitle(newTitle: string) {
    this.title = newTitle;
    this.submit.emit(newTitle);
  }

  generateTitle(): string {
    return this.title;
  }

}
