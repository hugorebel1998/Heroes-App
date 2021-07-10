import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscararComponent } from './pages/buscarar/buscarar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { HoroesRoutignModule } from './horoes-routign.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagesPipe } from './pipes/images.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscararComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagesPipe,
    ConfirmarComponent,
    
  ],
  imports: [
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    HoroesRoutignModule,                                
    MaterialModule,
  ]
  
})
export class HeroesModule { }
