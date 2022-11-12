import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pizza } from '../shared/models/pizza.model';
import { PizzaService } from '../shared/services/pizza.service';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
    
  public pizzas: Pizza[];
  
  constructor(private pizzaService: PizzaService, private panierService: PanierService) {
  }

  ngOnInit(): void {
    this.pizzas = this.pizzaService.getPizzas();
  }

  onClick(index: number): void {
    this.pizzaService.changePizza(index);
  }

  onPizzaSelected(): void{
    this.panierService.panier.next(this.pizzaService.pizza.value.ingredients);
  }

}
