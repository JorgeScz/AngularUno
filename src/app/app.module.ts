import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // Módulo necesario para la ejecución en un navegador web
    AppRoutingModule, // Módulo de enrutamiento para navegar entre páginas de la aplicación
    HttpClientModule   // Módulo necesario para realizar solicitudes HTTP
  ],
  providers: [],
  // Componente raíz de la aplicación
  bootstrap: [AppComponent]
})
export class AppModule { }
