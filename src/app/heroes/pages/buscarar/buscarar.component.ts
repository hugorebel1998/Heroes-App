import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroes } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscarar',
  templateUrl: './buscarar.component.html',
  styles: [
  ]
})
export class BuscararComponent implements OnInit {

  termino:string = "";
  heroes: Heroes[] = [];
  heroeSeleccionado:Heroes | undefined;

  constructor(private buscarHeroes: HeroesService) { }

  ngOnInit(): void {

  }

  buscador() {
    this.buscarHeroes.getSugerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes)
  }
  opcionSelecionada(event: MatAutocompleteSelectedEvent) {
    
      //  console.log(event.option.value);
      if(!event.option.value){
        // console.log("No se regreso ningun valor");
        this.heroeSeleccionado = undefined;
        return;
      }

      const heroe:Heroes = event.option.value;
      this.termino = heroe.superhero!;
  
      this.buscarHeroes.getHeroeId(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado = heroe)  
    }

}
