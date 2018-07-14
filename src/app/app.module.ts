// Imports de Material o externos, agregar aqui
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports de material
import {
  MatToolbarModule
} from '@angular/material';

/*
 * AÑADIR COMPONENTES CREADOS A PARTIR DE AQUI
 * TIP: AGREGAR AL ARREGLO DE "declarations" EN @NgModule, el nombre
 * de la clase exportada en el componente y se agrega automatico el import
*/

import { AppComponent } from './app.component';
// Componente de header para la aplicación
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  // Añadir modulos al arreglo de imports
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
