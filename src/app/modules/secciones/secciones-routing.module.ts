import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { HamburguesasComponent } from './pages/hamburguesas/hamburguesas.component';
import { TequenosComponent } from './pages/tequenos/tequenos.component';

const routes: Routes = [{
  path:"bebidas",component:BebidasComponent,
},
{
  path:"hamburguesas",component:HamburguesasComponent,
},
{
  path:"tequenos",component:TequenosComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
