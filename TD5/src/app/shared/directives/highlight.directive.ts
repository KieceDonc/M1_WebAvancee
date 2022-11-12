import { Directive, ElementRef, HostListener } from '@angular/core';
import { PizzaService } from '../services/pizza.service';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private pizzaService: PizzaService) {
  }

  @HostListener('click') onClick() {
    if(this.pizzaService.pizzaHighlighted != null){
      this.pizzaService.pizzaHighlighted.style.backgroundColor = '';
    }

    this.el.nativeElement.style.backgroundColor = '#46A4F8';
    this.pizzaService.pizzaHighlighted = this.el.nativeElement;
  }
  
}
