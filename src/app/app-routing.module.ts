import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ElectrodomesticosComponent } from './pages/electrodomesticos/electrodomesticos.component';
import { JardineriaComponent } from './pages/jardineria/jardineria.component';
import { BlancosComponent } from './pages/blancos/blancos.component';
import { CocinaComponent } from './pages/cocina/cocina.component';
import { PersonalesComponent } from './pages/personales/personales.component';
import { ElectronicaComponent } from './pages/electronica/electronica.component';
import { LineaBlancaComponent } from './pages/linea-blanca/linea-blanca.component';
import { MueblesComponent } from './pages/muebles/muebles.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'electrodomestico',
    component: ElectrodomesticosComponent
  },
  {
    path: 'jardineria',
    component: JardineriaComponent
  },
  {
    path: 'blancos',
    component: BlancosComponent
  },
  {
    path: 'cocina',
    component: CocinaComponent
  },
  {
    path: 'personales',
    component: PersonalesComponent
  },
  {
    path: 'electronica',
    component: ElectronicaComponent
  },
  {
    path: 'lineaBlanca',
    component: LineaBlancaComponent
  },
  {
    path: 'muebles',
    component: MueblesComponent
  },  
  { 
    path: "**", 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
