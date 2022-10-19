import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  public pizza: BehaviorSubject<Pizza>;
  private pizzas : Pizza[];
  
  constructor() {
    this.pizzas = [
      new Pizza('marguerite','../../assets/margarita.jpg','La pizza Margherita est le nom d\'une spécialité culinaire traditionnelle de la ville de Naples en Italie. '),
      new Pizza('Mex','../../assets/mex.jpg','a pizza Tex-Mex, un savant mélange de ...'),
      new Pizza('4 Fromages','../../assets/fromage.jpg','Pizza quattro formaggi Italian: est une variété de pizza dans la cuisine italienne qui est garnie d\'une combinaison de quatre types de fromage'),
    ];  
    
    this.pizza = new BehaviorSubject(this.pizzas[0]);
  }

  getPizzas(): Pizza[]{
    return this.pizzas;
  }

  changePizza(index: number): void{
    this.pizza.next(this.pizzas[index]);
  }
}
