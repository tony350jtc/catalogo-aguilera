import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SeccionesRoutingModule } from './secciones-routing.module';
import { HamburguesasComponent } from './pages/hamburguesas/hamburguesas.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { TequenosComponent } from './pages/tequenos/tequenos.component';


@NgModule({
  declarations: [
    HamburguesasComponent,
    BebidasComponent,
    TequenosComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule
  ]
})
export class SeccionesModule { }
