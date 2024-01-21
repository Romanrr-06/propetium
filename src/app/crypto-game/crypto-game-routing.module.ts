import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoGamePage } from './crypto-game.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoGamePageRoutingModule {}
