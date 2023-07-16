import { Component, OnInit } from '@angular/core';
import {Ubicacion} from "../classes/ubicacion";
import {CdrService} from "../service/cdr.service";

@Component({
  selector: 'app-vista-ubicaciones-report',
  templateUrl: './vista-ubicaciones-report.component.html',
  styleUrls: ['./vista-ubicaciones-report.component.css']
})
export class VistaUbicacionesReportComponent implements OnInit {

  ubicaciones : Ubicacion[];
  constructor(private service : CdrService) { }

  ngOnInit(): void {
    this.getUbiaciones("mr14015@ues.edu.sv");
  }
  private getUbiaciones(email : string) {
    this.service.listaRutasEmail(email).subscribe(data => {
      this.ubicaciones = data;
    })
  }

}
