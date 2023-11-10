import { Component } from '@angular/core';
import { Pizza } from '../shared/model/Pizza';
import { PizzaService } from '../shared/PizzaService';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
//la pizza selectionné
  selectedPizza!:Pizza ;
  //notre grande list qui joue le rôle d'une base de données
  public  list: Pizza[] = [
  new Pizza('Marguerite', './assets/1.jpeg', ' a pizza Marguerite melange de ..'),
  new Pizza('Mex', './assets/2.jpeg','a pizza Mex melange  de ..'),
  new Pizza('4 fromage', './assets/3.jpeg','a pizza 4 fromages melan de ..'),
];
  getList() { return this.list;}

  isSelectedPizza(p:Pizza ): void {  this.selectedPizza = p;}//permet d'envoyer la pizza selectionné au fils

  constructor(private pizzaService: PizzaService) {
    this.pizzaService.setPizzas(this.list);
    

  }





}
