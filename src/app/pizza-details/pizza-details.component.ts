import { Component,Input } from '@angular/core';
import { Pizza } from '../shared/Pizza';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent  {
  @Input() pizza! : Pizza ;//correspond à une pizza qu'on affichera les details
  
}
