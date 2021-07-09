import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
// import Swal from 'sweetalert2';

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
    private router: Router,
    private alert: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // Verificar el url
    // console.log(this.router.url.includes('editar'))
    if (!this.router.url.includes('editar')) {
      return;
    } else {
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
          this.alerta(`Se actualizo ${this.heroe.superhero}`, "Aceptar");
        })


    } else {
      this.heroeServive.guardarHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/listadoHeroes'])
          this.alerta(`Nuevo heroe creado ${this.heroe.superhero}`, "Aceptar")
        })
    }
  }
  borrarHeroe() {
    this.heroeServive.eliminarHeroe(this.heroe.id!)
      .subscribe(heroe => {
        console.log(heroe)
        this.router.navigate(['/heroes/listadoHeroes'])
      })

  }

  alerta(mensaje: string, action: string) {
    this.alert.open(mensaje, action, {
      duration: 2000

    });
  }

}
