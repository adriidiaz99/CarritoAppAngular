import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
