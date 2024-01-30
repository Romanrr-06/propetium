import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgChartsModule } from 'ng2-charts';
import { AuthModule } from '@auth0/auth0-angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartjsModule } from 'ng-chartjs';
import { FormsModule } from '@angular/forms';

// import { FilterPipe } from './filtro.pipe';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    IonicModule.forRoot(),
    AppRoutingModule,
    // NgChartjsModule,
    FormsModule,
    BrowserModule,
    // NgApexchartsModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {}),
    // NgChartsModule,
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

