import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesasComponent } from './components/mesas/mesas.component';
import { MostrarMesasComponent } from './components/mostrar-mesas/mostrar-mesas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MesasComponent },
  { path: 'mostrar', component: MostrarMesasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
