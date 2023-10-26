import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() message: any;
  @Output() clickToChild = new EventEmitter<number>();

  count = 0;
  
  clickHandle() {
    this.count++;
    this.clickToChild.emit(this.count);
  }
}
