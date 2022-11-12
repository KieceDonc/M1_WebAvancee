import { Ingredient } from "./ingredient.model";

export class Ingredients{
  
  private list: Ingredient[];
  private index: number;

  constructor(private maxQuantity: number){
    this.list = Ingredient[maxQuantity];
    this.index = 0;
  }

  add(ingredient: Ingredient): void{
    if(this.index >= this.maxQuantity-1){
      throw "Impossible d'ajouté l'ingrédient, taille maximun déjà atteinte";
    }
    this.list[this.index] = ingredient;
    this.index++;
  }

}