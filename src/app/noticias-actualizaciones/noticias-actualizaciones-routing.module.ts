import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasActualizacionesPage } from './noticias-actualizaciones.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasActualizacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasActualizacionesPageRoutingModule {}
