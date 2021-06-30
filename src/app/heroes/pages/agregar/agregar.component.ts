import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroes,Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel Comics'
    }
  ]

  heroe:Heroes = {
    superhero :'',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance:'',
    characters: '',
    alt_img:''
  }


  constructor( private heroeServive:HeroesService,
               private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // Verificar el url
    this.activatedRoute.params.subscribe(({id}) => console.log(id));
  }


  guardarHeroe(){

    if(this.heroe.superhero!.trim().length  === 0)
    return;

    this.heroeServive.guardarHeroe(this.heroe)
    .subscribe((heroe) => {
      console.log("Respuesta", heroe)
    })

    
  }
}
