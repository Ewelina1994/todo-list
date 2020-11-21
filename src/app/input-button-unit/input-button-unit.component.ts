import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <p>{{title}}</p>
  <input #inputElementRef
         [value]="title"
         (keyup.enter)="changeTitle($event.target.value)">

  <button (click)="changeTitle(inputElementRef.value)">
    Save
  </button>
  `,

  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  title='Hello World';
  constructor() {
    this.title='I love Angular'
  }

  ngOnInit(): void {
    this.title='Angular CLI Rules!';
    this.show();
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }

  // changeTitle(event) {
  //   console.log(event);
  //   this.title = event.target.value; // the original functionality still works
  // }

  changeTitle(inputElementReference) {
    console.log(inputElementReference);
    this.title = inputElementReference;
  }

  show() {
    let x=10;
    x+=10;
    console.log(x);
  }

  generateTitle(): string {
    return this.title;
  }

}
