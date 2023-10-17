import {
  Directive,
  ElementRef,
  HostListener,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appInBuild]',
})
export class InBuildDirective implements OnChanges {
  constructor(private er: ElementRef) {}
  @HostListener('window:keyup') ngOnChanges(event: any) {
    let count = this.er.nativeElement.value.length;
    if (count < 5) {
      this.er.nativeElement.style.backgroundColor = 'red';
    } else if (count >= 5 && count <= 10) {
      this.er.nativeElement.style.backgroundColor = 'green';
    } else {
      this.er.nativeElement.style.backgroundColor = 'purple';
    }
  }
}
