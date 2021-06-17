import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../heroes/pages/home/home.component';
import { AgregarComponent } from '../heroes/pages/agregar/agregar.component';
import { BuscararComponent } from '../heroes/pages/buscarar/buscarar.component';
import { HeroeComponent } from '../heroes/pages/heroe/heroe.component';
import { ListadoComponent } from '../heroes/pages/listado/listado.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
     children:
      [
        {
          path: 'listadoHeroes', component: ListadoComponent
        },
        {
          path: 'agregar', component: AgregarComponent
        },
        {
          path: 'editar/:id', component: AgregarComponent
        },
        {
          path: 'buscar', component: BuscararComponent
        },
        {
          path: ':id', component: HeroeComponent
        },
        {
          path: '**', redirectTo:'listadoHeroes'
        }
      ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HoroesRoutignModule { }
