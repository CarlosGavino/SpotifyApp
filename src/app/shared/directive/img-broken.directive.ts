import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg: string | boolean = false;
  @HostListener('error') handleError(){
    const elNative = this.elHost.nativeElement;
    if(elNative){
      elNative.src = this.customImg;
    } else {
      elNative.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    }
    
    
  }

  constructor( private elHost: ElementRef) { 
    
  }

}
