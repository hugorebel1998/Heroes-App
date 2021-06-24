import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    .heroe-img{
      width:100%;
      border-radius: 1rem;
    }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!:Heroes;
  constructor(private routeActivate:ActivatedRoute,
              private heroeServive:HeroesService,
              private routeback:Router) { }

  ngOnInit(): void {
    
    // this.routeActivate.params
    // .pipe(
    //   switchMap(({id}) => this.heroeServive.getHeroeId(id))
    // )
    // .subscribe(heroe => this.heroe = heroe)
    this.routeActivate.params
    .subscribe(({id}) => {
      
      this.heroeServive.getHeroeId(id)
      .subscribe(heroe =>{
         this.heroe = heroe;
         console.log(heroe);
      })

    })


  }
  regresar(){
    this.routeback.navigate(['heroes/listadoHeroes']);
  }
  

}
