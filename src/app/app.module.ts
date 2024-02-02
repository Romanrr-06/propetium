import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthModule } from '@auth0/auth0-angular';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
;
// import { FilterPipe } from './filtro.pipe';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule, 
    NgChartsModule,
    NgChartsModule,
    FormsModule,
    BrowserModule,

    // ServiceWorker.register('ngsw-worker.js', {}),
    AuthModule.forRoot({
      domain: 'dev-fxnxeoubwkjca2ea.eu.auth0.com',
      clientId: 'fSBOzdoh3HZOjXtxDqMCkY38kslJGQfi',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),

  ],
  providers: [ 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}

