import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  transfer: any = 'this parent from component';
  parentcounter = 0;
  randomNumber = 0;

  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100);
    console.log(this.randomNumber);
  }
  clickHandler(value: any) {
    this.parentcounter = value;
  }

}