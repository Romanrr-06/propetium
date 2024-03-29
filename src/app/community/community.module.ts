import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityPageRoutingModule } from './community-routing.module';
import { CommunityPage } from './community.page';
// import { AsistenteComponent } from '../../components/asistente/asistente.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityPageRoutingModule,
  ],
  declarations: [
    CommunityPage,
    // AsistenteComponent, // Add this line to declare AsistenteComponent
  ],
})
export class CommunityPageModule {}
