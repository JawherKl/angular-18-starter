import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomHighlight]',
  standalone: true
})
export class CustomHighlightDirective {
  
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
