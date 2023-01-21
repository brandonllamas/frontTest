import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponentComponent } from './components/banner-component/banner-component.component';
import { PreguntaPeludoComponent } from './components/pregunta-peludo/pregunta-peludo.component';
import { ItemPeludoComponent } from './components/PreguntaPeludo/item-peludo/item-peludo.component';
import { NuestroPlanesComponent } from './components/nuestro-planes/nuestro-planes.component';
import { TablePlanesComponent } from './components/NuestroPlanes/table-planes/table-planes.component';
import { SeguroClubComponent } from './components/seguro-club/seguro-club.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponentComponent,
    PreguntaPeludoComponent,
    ItemPeludoComponent,
    NuestroPlanesComponent,
    TablePlanesComponent,
    SeguroClubComponent,
    FooterComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
