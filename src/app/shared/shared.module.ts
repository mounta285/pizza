import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedPizzaDirective } from './directives/selected-pizza.directive';


@NgModule({
  declarations: [SelectedPizzaDirective],
  imports: [
    CommonModule
  ],
  exports:[SelectedPizzaDirective]
})
export class SharedModule { }
//on import notre directive dans le module commun
//on ajout le shared.module aux imports dans le module principal