import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaContainerComponent } from './pizza-container/pizza-container.component';
import { HighlightDirective } from './shared/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PizzaListComponent,
    PizzaDetailComponent,
    PizzaContainerComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
