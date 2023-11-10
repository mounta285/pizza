import{ Directive,ElementRef,Input,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelectedPizza]'
})
export class SelectedPizzaDirective {

  @Input() appSelectedPizza(value:boolean){
    if (value) {
        this.renderer.setStyle(this.elt.nativeElement,'border','2px solid red');
    }else{
        this.renderer.removeStyle(this.elt.nativeElement,'border')
    }
}

constructor(private elt : ElementRef , private renderer : Renderer2 ){}

}
