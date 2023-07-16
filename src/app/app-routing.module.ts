import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {VistaMapaComponent} from "./vista-mapa/vista-mapa.component";
import {VistaUbicacionesReportComponent} from "./vista-ubicaciones-report/vista-ubicaciones-report.component";

const routes : Routes = [
  {path : 'map', component:VistaMapaComponent},
  {path : 'ubi', component:VistaUbicacionesReportComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
