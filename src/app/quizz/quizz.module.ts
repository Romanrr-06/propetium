import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
// import { HttpClient } from '@angular/common/http';

import { QuizzPageRoutingModule } from './quizz-routing.module';
import { HttpBackend } from '@angular/common/http';
import { QuizzPage } from './quizz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    QuizzPageRoutingModule
  ],
  declarations: [QuizzPage,]
})
export class QuizzPageModule {}
