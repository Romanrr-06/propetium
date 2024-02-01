import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistendPageRoutingModule } from './asistend-routing.module';

import { AsistendPage } from './asistend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistendPageRoutingModule
  ],
  declarations: [AsistendPage]
})
export class AsistendPageModule {}
