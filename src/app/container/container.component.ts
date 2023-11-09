import { Component } from '@angular/core';
import { Pizza } from '../shared/Pizza';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
//la pizza selectionné
  selectedPizza!:Pizza ;

  public  list: Pizza[] = [
  new Pizza('Margherita', 'Tomato sauce', 'mozzarella cheese'),
  new Pizza('Prosciutto e Funghi', 'Fresh prosciutto and mushrooms in a tomato sauce with','err'),
  new Pizza('Prosciutto e Funghi', 'Fresh prosciutto and mushrooms in a tomato sfsgdvsygdh','errhjgu'),
];
  getList() { return this.list;}

  isSelectedPizza(p:Pizza ): void {  this.selectedPizza = p;}//permet d'envoyer la pizza selectionné au fils
}
