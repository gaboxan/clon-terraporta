import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropiedadesListadoComponent } from './propiedades-listado/propiedades-listado.component';
import { CarrousselComponent } from './carroussel/carroussel.component';
import { PropiedadDetallesComponent } from './propiedad-detalles/propiedad-detalles.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  {path:'', component:CarrousselComponent},
  { path: 'propiedades', component: PropiedadesListadoComponent },
  {path: 'propiedadDetalles', component:PropiedadDetallesComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'contacto', component:ContactoComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
