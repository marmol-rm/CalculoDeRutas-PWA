import { Component, OnInit } from '@angular/core';
import {CdrService} from "../service/cdr.service";
import {RutaMain} from "../classes/ruta-main";

@Component({
  selector: 'app-vista-rutas-hoy',
  templateUrl: './vista-rutas-hoy.component.html',
  styleUrls: ['./vista-rutas-hoy.component.css']
})
export class VistaRutasHoyComponent implements OnInit {

  rutas : RutaMain[];
  constructor(private service : CdrService) { }

  ngOnInit(): void {
    this.getRutas(new Date().toISOString().split("T")[0]);
  }

  private getRutas(fecha : string) {
    this.service.listaRutasFecha(fecha).subscribe(data => {
      this.rutas = data;
    })
  }

}
