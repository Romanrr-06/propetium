import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasActualizacionesPageRoutingModule } from './noticias-actualizaciones-routing.module';

import { NoticiasActualizacionesPage } from './noticias-actualizaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasActualizacionesPageRoutingModule
  ],
  declarations: [NoticiasActualizacionesPage]
})
export class NoticiasActualizacionesPageModule {}
