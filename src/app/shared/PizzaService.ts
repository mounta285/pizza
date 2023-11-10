import { Injectable } from "@angular/core";
import {BehaviorSubject} from 'rxjs';
import { Pizza } from "./model/Pizza";



@Injectable({
    providedIn: "root"
})
export class PizzaService{
    private pizzasSubject = new BehaviorSubject<Pizza[]>([]);
    private selectedPizzaSubject = new BehaviorSubject<Pizza | null>(null);
  
    pizzas$ = this.pizzasSubject.asObservable();
    selectedPizza$ = this.selectedPizzaSubject.asObservable();
  
    constructor() {}
  
    setPizzas(pizzas: Pizza[]): void {
      this.pizzasSubject.next(pizzas);
    }
  
    setSelectedPizza(pizza: Pizza): void {
      this.selectedPizzaSubject.next(pizza);
    }
}


