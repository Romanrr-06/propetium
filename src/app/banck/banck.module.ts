import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanckPageRoutingModule } from './banck-routing.module';

import { BanckPage } from './banck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanckPageRoutingModule
  ],
  declarations: [BanckPage]
})
export class BanckPageModule {}
