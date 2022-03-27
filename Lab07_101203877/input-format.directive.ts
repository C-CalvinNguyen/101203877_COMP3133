import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('focusout')
  onFocusout() {
    this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.toUpperCase();
  }

}
