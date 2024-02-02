import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoPage } from './crypto.page';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: CryptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),    NgChartsModule, ],
  exports: [RouterModule],
})
export class CryptoPageRoutingModule {}
