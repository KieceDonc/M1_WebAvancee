import { Component, OnInit } from '@angular/core';

import { Pizza } from '../pizza'

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

    pizzas : Array<Pizza>;

  constructor() {
    this.pizzas = new Array<Pizza>(5);
    this.pizzas[0] = {name: "Margherita", img: "https://img.cuisineaz.com/660x660/2013/12/20/i18445-margherite.jpeg", desc: "La pizza Margherita est une spécialité culinaire traditionnelle de la ville de Naples, en Italie. Très populaire, cette pizza napoletana est garnie de tomates, de mozzarella, de basilic frais, de sel et d'huile d'olive. Les couleurs de ces trois premiers ingrédients sont celles du drapeau italien. "};
    this.pizzas[1] = {name: "Flammekueche", img: "https://i0.wp.com/cuisinemicheline.com/wp-content/uploads/2020/04/IMG_2813.jpeg", desc: "La tarte flambée, ou flammekueche, est une recette traditionnelle des cuisine alsacienne, cuisine de la Moselle germanophone, et de la cuisine allemande des régions adjacentes du Pays de Bade, du Palatinat. Elle est composée d'une fine abaisse de pâte composée de farine, d'eau, d'huile et de sel, puis recouverte de crème fraîche épaisse ou de fromage blanc (ou d'un mélange des deux : le Bibeleskäs), d'oignons en rondelles et de lardons, puis rapidement cuite au four à pain très chaud. Elle peut également se décliner en multiples variantes. "};
    this.pizzas[2] = {name: "Pizza 4 fromages", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg/280px-Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg", desc: "La pizza quatre fromages (en italien : pizza ai quattro formaggi) est un type de pizza dont la particularité est l'utilisation d'une combinaison de quatre sortes de fromages, généralement fondus ensemble. Plat populaire, c'est un classique des menus des pizzerias."};
    this.pizzas[3] = {name: "Pizza traditionnelles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/280px-Pizza_Margherita_stu_spivack.jpg", desc: "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie de divers mélanges d’ingrédients (sauce tomate, tomates séchées, légumes, fromage, charcuterie, olives, huile d'olive…)1 et cuite au four. Plat emblématique de la culture italienne, et de la restauration rapide dans le monde entier, elle est déclinée sous de multiples variantes. « L'art de fabriquer des pizzas napolitaines artisanales traditionnelles par les pizzaïolos napolitains » est inscrit au Patrimoine mondial de l'UNESCO depuis 2017. "};
    this.pizzas[4] = {name: "Pizza jambon fromage", img: "https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F4e91aa9c-78bc-4923-91bc-bb286af9f6e0.2Ejpeg/555x276/quality/80/crop-from/center/pizza-jambon-fromage.jpeg", desc: "Une pizza jambom fromage"};

  }

  ngOnInit(): void {
  }

}
