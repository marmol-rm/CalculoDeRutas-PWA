import { Component, OnInit } from '@angular/core';
import {CdrService} from "../service/cdr.service";
import {RutaMain} from "../classes/ruta-main";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vista-rutas-hoy',
  templateUrl: './vista-rutas-hoy.component.html',
  styleUrls: ['./vista-rutas-hoy.component.css']
})
export class VistaRutasHoyComponent implements OnInit {

  rutas : RutaMain[];
  constructor(private service : CdrService, private router : Router) { }

  ngOnInit(): void {
    this.getRutas(new Date().toISOString().split("T")[0]);
  }

  redirectMap() {
    this.router.navigate(['/map'])
  }

  private getRutas(fecha : string) {
    this.service.listaRutasFecha(fecha).subscribe(data => {
      this.rutas = data;
    })
  }

}
