import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(200)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(400, style({opacity: 0})))
    ])
  ]
})
export class AppComponent  {
  name = 'Angular';
  data = ["A", "B", "C"];

  add(){
    const random = Math.floor(Math.random() * 10);
    this.data.push(random.toString());
  }

  remove(){
    this.data.pop();
  }

  removeThis(index){
    this.data.splice(index, 1);
  }
}
