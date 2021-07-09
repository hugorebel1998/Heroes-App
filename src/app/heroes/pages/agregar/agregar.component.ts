import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img{
      border-radius: 1rem;
    }
    `
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

  heroe: Heroes = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: ''
  }


  constructor(private heroeServive: HeroesService,
             private activatedRoute: ActivatedRoute,
             private router:Router
   ) { }

  ngOnInit(): void {
    // Verificar el url
    // console.log(this.router.url.includes('editar'))
    if(!this.router.url.includes('editar')){
    return;
    }else{
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroeServive.getHeroeId(id))
        )
        .subscribe(heroe => this.heroe = heroe)

    }
    
      
  }


  guardarHeroe() {

    if (this.heroe.superhero!.trim().length === 0)
      return;

    if (this.heroe.id) {
      this.heroeServive.actualizarHeroe(this.heroe)
        .subscribe((heroe) => {
        this.router.navigate(['/heroes/listadoHeroes']);
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Heroe actualizado con éxito',
          showConfirmButton: true,
          timer: 2000
        });
        })
        

    } else {
      this.heroeServive.guardarHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/listadoHeroes'])
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Heroe creado con éxito',
            showConfirmButton: true,
            timer: 2000
          });
        })
    }
  }
  borrarHeroe(){
    this.heroeServive.eliminarHeroe(this.heroe.id!)
    .subscribe(heroe => {
      console.log(heroe)

      this.router.navigate(['/heroes/listadoHeroes'])
      // Swal.fire({
      //   title: 'Estas seguro?',
      //   text: "No puedes eliminar este heroe!",
      //   icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#d33',
      //   confirmButtonText: 'Si, Eliminar heroe!'
      // }).then((heroe) => {
      //   if (heroe.isConfirmed) {
      //     Swal.fire(
      //       'Eliminando!',
      //       'Heroe.',
      //       'success'
      //     )
      //   }
      // })
    })

  }

  
}
