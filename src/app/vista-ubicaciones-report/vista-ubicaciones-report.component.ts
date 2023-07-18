import { Component, OnInit } from '@angular/core';
import {Ubicacion} from "../classes/ubicacion";
import {CdrService} from "../service/cdr.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vista-ubicaciones-report',
  templateUrl: './vista-ubicaciones-report.component.html',
  styleUrls: ['./vista-ubicaciones-report.component.css']
})
export class VistaUbicacionesReportComponent implements OnInit {

  ubicaciones : Ubicacion[];
  constructor(private service : CdrService, private router : Router) { }

  ngOnInit(): void {
    this.getUbiaciones("mr14015@ues.edu.sv");
  }

  redirectMap() {
    this.router.navigate(['/map'])
  }
  private getUbiaciones(email : string) {
    this.service.listaUbiEmail(email).subscribe(data => {
      this.ubicaciones = data;
    })
  }

}
