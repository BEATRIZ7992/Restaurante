import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { MostrarMesasComponent } from './components/mostrar-mesas/mostrar-mesas.component';

@NgModule({
  declarations: [
    AppComponent,
    MesasComponent,
    MostrarMesasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
