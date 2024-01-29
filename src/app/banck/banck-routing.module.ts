import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanckPage } from './banck.page';

const routes: Routes = [
  {
    path: '',
    component: BanckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanckPageRoutingModule {}
