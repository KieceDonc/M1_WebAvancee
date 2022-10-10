import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-container',
  templateUrl: './pizza-container.component.html',
  styleUrls: ['./pizza-container.component.css']
})
export class PizzaContainerComponent implements OnInit {

  public currentPizza: Pizza;
    
  constructor() { 
  }

  ngOnInit(): void {
  }

  onPizzaChanged(pizza): void {
    this.currentPizza = pizza;
  }
}
