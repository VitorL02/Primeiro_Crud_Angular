import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueBackground]'
})
export class BlueBackgroundDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.background='#004CC0';
  }


}
