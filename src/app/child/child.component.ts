import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() message: any;
  @Input() set takeRandomNumber(data: any) {
    this.modifiedNumber = this.getModifiedNumber(data)
  }
  @Output() clickToChild = new EventEmitter<number>();

  count = 0;
  modifiedNumber = 0;

  getModifiedNumber(data: any) {
    if (data) {
      return data + 10;
    }
    return 0;
  }
  clickHandle() {
    this.count++;
    this.clickToChild.emit(this.count);
  }

}