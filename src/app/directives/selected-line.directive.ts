import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectedLine]'
})
export class SelectedLineDirective {

  @HostBinding('style.backgroundColor') bg = 'white';
  constructor() { }

  @HostListener ('mouseenter') mouseEnter(){
    this.bg = 'mediumpurple';
  }

  @HostListener ('mouseleave') mouseLeave(){
    this.bg = 'white';
  }

}
