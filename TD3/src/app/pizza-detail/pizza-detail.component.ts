import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../shared/models/pizza.model';
import { PizzaService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {

  public currentPizza: Pizza; 

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.pizza.subscribe((pizza: Pizza) =>{
      this.currentPizza = pizza;
    });
  }

}
