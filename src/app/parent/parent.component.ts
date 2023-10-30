import { Component } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  transfer: any = 'this parent from component';
  parentcounter = 0;
  randomNumber = 0;

  constructor(private sharingData: SharingService) { }

  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100);
    console.log(this.randomNumber);
  }
  clickHandler(value: any) {
    this.parentcounter = value;
  }
  sharingDataToOthers() {
    this.sharingData.shareData.next([
      { name: 'random', age: 12 },
      { name: 'random1', age: 13 },
      { name: 'random2', age: 14 },
      { name: 'random3', age: 15 },
    ]);
  }

}