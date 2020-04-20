import {Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appBlackboardCatDirective]'
})
export class BlackboardCatDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit(): void {
    // this.elementRef.nativeElement.style.backgroundColor = 'lightgrey';
    this.backgroundColor = 'lightgrey';
    // this.btn3.color = 'pink';
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'yellow';
  }

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  @HostListener('click') onClick(eventData: Event) {
    // const part = this.elementRef.nativeElement.querySelector('#btn-3');
    // this.render.setStyle(part, 'display', 'none');
    this.render.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
    // eventData.stopPropagation();
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'lightgrey';
  }
}
