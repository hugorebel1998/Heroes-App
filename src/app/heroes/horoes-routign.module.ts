import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscararComponent } from './pages/buscarar/buscarar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';



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
