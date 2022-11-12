import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {

  public ingredients: Ingredient[] = [];

  constructor(private panierService: PanierService) {

  }

  ngOnInit(): void {
    this.panierService.panier.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    })
  }

}