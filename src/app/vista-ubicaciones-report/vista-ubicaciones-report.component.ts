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
  email : string;
  constructor(private service : CdrService, private router : Router) { }

  ngOnInit(): void {
    this.email = history.state.email;
    this.getUbicaciones();
  }

  redirectMap() {
    this.router.navigate(['/map'], {
      state : {email : history.state.email}
    })
  }
  private getUbicaciones() {
    this.service.listaUbiEmail(this.email).subscribe(data => {
      this.ubicaciones = data;
    })
  }

}
