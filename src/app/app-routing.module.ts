import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// INPORTAR RUTAS
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';
import {ItemComponent } from '../app/pages/item/item.component';
import { ServicioComponent } from './pages/servicio/servicio.component';

 const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'servicio/:id', component: ServicioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash:true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
