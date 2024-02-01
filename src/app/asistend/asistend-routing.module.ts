import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistendPage } from './asistend.page';

const routes: Routes = [
  {
    path: '',
    component: AsistendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistendPageRoutingModule {}
