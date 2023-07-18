import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {VistaMapaComponent} from "./vista-mapa/vista-mapa.component";
import {VistaUbicacionesReportComponent} from "./vista-ubicaciones-report/vista-ubicaciones-report.component";
import {VistaLoginComponent} from "./vista-login/vista-login.component";
import {VistaRegUsuarioComponent} from "./vista-reg-usuario/vista-reg-usuario.component";
import {VistaRutasHoyComponent} from "./vista-rutas-hoy/vista-rutas-hoy.component";

const routes : Routes = [
  {path : 'map', component:VistaMapaComponent},
  {path : 'ubi', component:VistaUbicacionesReportComponent},
  {path : 'today', component:VistaRutasHoyComponent},
  {path : 'login', component:VistaLoginComponent},
  {path : 'reg', component:VistaRegUsuarioComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
