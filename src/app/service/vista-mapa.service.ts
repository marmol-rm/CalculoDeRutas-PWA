import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ruta} from "../classes/ruta";

@Injectable({
  providedIn: 'root'
})
export class VistaMapaService {

  private saveRutaUrl : string = "http://localhost:8080/cdr/save-ruta";
  private getRutasUrl : string = "http://localhost:8080/cdr/get-rutas";

  constructor(private client : HttpClient) { }

  guardaRuta(r : Ruta):Observable<Object> {
    return this.client.post<Ruta>(this.saveRutaUrl, r);
  }

  listaRutas() : Observable<Ruta[]> {
    return this.client.get<Ruta[]>(this.getRutasUrl);
  }

}
