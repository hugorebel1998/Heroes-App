import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  constructor(private heroeServvice:HeroesService) {
    // console.log(this.heroes);
   }

  heroes:Heroes[] = [];

  ngOnInit(): void {
    this.heroeServvice.getHeroes().subscribe(res =>{
      this.heroes = res
      
    });
  }
  

}
