import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  @Input() 

	public pizza = new Pizza('Mex','../../assets/mex.jpg','a pizza Tex-Mex, un savant mélange de ...');

  constructor() { }

  ngOnInit(): void {
  }

}
