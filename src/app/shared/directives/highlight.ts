import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone:true
})
export class Highlight {

  constructor() { }

  @HostBinding('style.background') background ='';

  @HostListener('mouseenter')
  onMouseEnter(){
    this.background='yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.background='blue';
  }
}
