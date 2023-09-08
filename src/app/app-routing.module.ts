import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropiedadesListadoComponent } from './propiedades-listado/propiedades-listado.component';
import { CarrousselComponent } from './carroussel/carroussel.component';


const routes: Routes = [
  {path:'', component:CarrousselComponent},
  { path: 'propiedades', component: PropiedadesListadoComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
