import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() random: any;
  count = 0;
  @Output() clickToChild = new EventEmitter<number>();
  clickHandle() {
    this.count++;
    this.clickToChild.emit(this.count);
  }
}
