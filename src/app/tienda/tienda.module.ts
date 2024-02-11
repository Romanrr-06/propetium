// tienda.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TiendaPageRoutingModule } from './tienda-routing.module';
import { TiendaService } from '../services/tienda.service';  // Ajusta la ruta aquí

import { TiendaPage } from './tienda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiendaPageRoutingModule
  ],
  declarations: [TiendaPage],
  providers: [TiendaService],
})
export class TiendaPageModule {}
