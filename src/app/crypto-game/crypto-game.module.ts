import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoGamePageRoutingModule } from './crypto-game-routing.module';

import { CryptoGamePage } from './crypto-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoGamePageRoutingModule
  ],
  declarations: [CryptoGamePage]
})
export class CryptoGamePageModule {}
