  import { NgModule, isDevMode } from '@angular/core';
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
  import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker'; // Asegúrate de importar HttpClientModule
import { ToastController } from '@ionic/angular';

  // import { ToastController } from '@ionic/angular';

  @NgModule({
    declarations: [AppComponent],
    imports: [
      IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      NgChartsModule,
      BrowserModule,
    
      HttpClientModule,
      AuthModule.forRoot({
        domain: 'dev-fxnxeoubwkjca2ea.eu.auth0.com',
        clientId: 'fSBOzdoh3HZOjXtxDqMCkY38kslJGQfi',
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      }),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      }),
    ],
    providers: [
      ToastController,  
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {
    
  }

