import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPanierComponent } from './app-panier/app-panier.component';
import { PizzaContainerComponent } from './pizza-container/pizza-container.component';

const APP_ROUTE: Routes = [
  {path:'', redirectTo: 'pizzas', pathMatch:'full'},
  {path:'panier', component: AppPanierComponent},
  {path:'pizzas', component: PizzaContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTE)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/