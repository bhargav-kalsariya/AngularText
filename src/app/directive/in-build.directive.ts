import {
  Directive,
  ElementRef,
  HostListener,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appInBuild]',
})
export class InBuildDirective implements OnChanges {
  constructor(private er: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.er.nativeElement,
      'background-color',
      'lightgray'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.er.nativeElement, 'background-color');
  }
  @HostListener('window:keyup')
  ngOnChanges(event: any) {
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
