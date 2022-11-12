import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
import { Pizza } from '../models/pizza.model';
// import { PanierService } from './panier.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  public pizza: BehaviorSubject<Pizza>;
  public pizzaHighlighted : HTMLElement;
  private pizzas : Pizza[];
  
  constructor(/*private panierService: PanierService*/) {
    this.pizzas = [
      new Pizza('marguerite','../../assets/margarita.jpg','La pizza Margherita est le nom d\'une spécialité culinaire traditionnelle de la ville de Naples en Italie. ',[new Ingredient("Fromage",5), new Ingredient("Sel",10)]),
      new Pizza('Mex','../../assets/mex.jpg','a pizza Tex-Mex, un savant mélange de ...',[new Ingredient("Oignons",5), new Ingredient("Poivre",10)]),
      new Pizza('4 Fromages','../../assets/fromage.jpg','Pizza quattro formaggi Italian: est une variété de pizza dans la cuisine italienne qui est garnie d\'une combinaison de quatre types de fromage',[new Ingredient("Fromage 1",10),new Ingredient("Fromage 2",12),new Ingredient("Fromage 3",14),new Ingredient("Fromage 4",16)]),
    ];  
    
    this.pizza = new BehaviorSubject(this.pizzas[0]);
  }

  getPizzas(): Pizza[]{
    return this.pizzas;
  }

  changePizza(index: number): void{
    this.pizza.next(this.pizzas[index]);
    //this.panierService.panier.next(this.pizza.value.ingredients);
  }
}
