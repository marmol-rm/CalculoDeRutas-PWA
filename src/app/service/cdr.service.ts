import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ruta} from "../classes/ruta";
import {Observable} from "rxjs";
import {Ubicacion} from "../classes/ubicacion";
import {RutaMain} from "../classes/ruta-main";

@Injectable({
  providedIn: 'root'
})
export class CdrService {

  private host : string = "http://10.0.2.2:8080";
  private saveRutaUrl : string = this.host + "/cdr/save-ruta";
  private getRutasUrl : string = this.host + "/cdr/get-rutas";
  private getUbiUrl : string = this.host + "/cdr/get-ubi";
  constructor(private client : HttpClient) { }

  guardaRuta(r : Ruta):Observable<Object> {
    return this.client.post<Ruta>(this.saveRutaUrl, r);
  }

  listaRutasFecha(fecha : string) : Observable<RutaMain[]> {
    return this.client.get<RutaMain[]>(this.getRutasUrl + '?fecha=' + fecha);
  }

  listaUbiEmail(email : string) : Observable<Ubicacion[]> {
    return this.client.get<Ubicacion[]>(this.getUbiUrl + '?email=' + email);
  }
}
