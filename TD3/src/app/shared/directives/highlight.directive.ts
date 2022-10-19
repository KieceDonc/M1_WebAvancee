import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = '#46A4F8';
  }
  
}
