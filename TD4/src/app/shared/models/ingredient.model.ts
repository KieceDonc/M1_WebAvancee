export class Ingredient{
  
  public name: string;
  public quantity: number;

  construction(name: string, quantity: number){
    this.name = name;
    this.quantity = quantity;
  }
}