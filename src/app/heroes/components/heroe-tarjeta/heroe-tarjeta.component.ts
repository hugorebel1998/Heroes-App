import { Component, Input} from '@angular/core';
import { Heroes } from '../../interface/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent {

  @Input('heroe') heroe!:Heroes;

 
}
