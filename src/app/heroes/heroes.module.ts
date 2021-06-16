import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscararComponent } from './pages/buscarar/buscarar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscararComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
