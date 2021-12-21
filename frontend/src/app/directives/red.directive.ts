import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {
  // Fazendo a injeção de dependencias usando o private el:ElementRef
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b';
   }

}
