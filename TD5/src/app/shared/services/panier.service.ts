import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  
  public ingredients: Ingredient[];
  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject(null);

  constructor() { }

}
