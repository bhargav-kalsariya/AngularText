import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInBuild]',
})
export class InBuildDirective {
  constructor(private er: ElementRef) {
    this.er.nativeElement.style.backgroundColor = 'red';
  }
}
