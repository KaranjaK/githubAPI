import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {

  

  constructor(private elem: ElementRef) { 
  }

}
