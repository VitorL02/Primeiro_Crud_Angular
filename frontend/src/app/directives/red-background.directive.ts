import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedBackground]'
})
export class RedBackgroundDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.background='#e35e6b';
  }

}
