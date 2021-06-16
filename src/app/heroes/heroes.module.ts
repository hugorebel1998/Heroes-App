import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscararComponent } from './pages/buscarar/buscarar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HoroesRoutignModule } from './horoes-routign.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscararComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    HoroesRoutignModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class HeroesModule { }
