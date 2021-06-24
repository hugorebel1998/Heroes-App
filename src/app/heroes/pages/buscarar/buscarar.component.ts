import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscarar',
  templateUrl: './buscarar.component.html',
  styles: [
  ]
})
export class BuscararComponent implements OnInit {
  
  heroes:Heroes[] = [];
  termino:string = "";

  constructor( private buscarHeroes:HeroesService) { }

  ngOnInit(): void {

  }
  buscador(){
    this.buscarHeroes.getHeroes().subscribe(heroes =>{
      this.heroes = heroes
      console.log(heroes)
    })    
  }

}
