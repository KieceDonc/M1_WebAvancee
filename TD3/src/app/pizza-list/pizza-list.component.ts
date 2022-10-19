import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pizza } from '../shared/models/pizza.model';
import { PizzaService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
    
  public pizzas: Pizza[];
  
  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit(): void {
    this.pizzas = this.pizzaService.getPizzas();
  }

  onClick(index: number): void {
    
    this.pizzaService.changePizza(index);
  }

}
