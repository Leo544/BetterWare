import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ElectrodomesticosComponent } from './pages/electrodomesticos/electrodomesticos.component';
import { JardineriaComponent } from './pages/jardineria/jardineria.component';
import { BlancosComponent } from './pages/blancos/blancos.component';
import { CocinaComponent } from './pages/cocina/cocina.component';
import { PersonalesComponent } from './pages/personales/personales.component';
import { ElectronicaComponent } from './pages/electronica/electronica.component';
import { LineaBlancaComponent } from './pages/linea-blanca/linea-blanca.component';
import { MueblesComponent } from './pages/muebles/muebles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ElectrodomesticosComponent,
    JardineriaComponent,
    BlancosComponent,
    CocinaComponent,
    PersonalesComponent,
    ElectronicaComponent,
    LineaBlancaComponent,
    MueblesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
