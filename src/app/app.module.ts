import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { VistaMapaComponent } from './vista-mapa/vista-mapa.component';
import { VistaLoginComponent } from './vista-login/vista-login.component';
import { VistaRegUsuarioComponent } from './vista-reg-usuario/vista-reg-usuario.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { VistaUbicacionesReportComponent } from './vista-ubicaciones-report/vista-ubicaciones-report.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaMapaComponent,
    VistaLoginComponent,
    VistaRegUsuarioComponent,
    VistaUbicacionesReportComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
