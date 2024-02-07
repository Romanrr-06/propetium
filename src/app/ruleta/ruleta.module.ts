import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RuletaPageRoutingModule } from './ruleta-routing.module';
import { RuletaPage } from './ruleta.page';
// import { HttpBackend } from '@angular/common/http'; 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RuletaPageRoutingModule,
    // HttpBackend
  ],
  declarations: [RuletaPage]
})
export class RuletaPageModule {}
