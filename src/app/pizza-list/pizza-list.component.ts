import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';
import { Pizza } from '../shared/Pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  @Input() list_pizza!: Pizza[];
  @Output() pizzaSelected = new EventEmitter<Pizza>();

  ngOnInit() {
     console.log(this.list_pizza);
 
  }
  recupPizzaSelected(p:Pizza ) {
    this.pizzaSelected.emit(p);
}

  
  
}
