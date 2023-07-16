import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ruta} from "../classes/ruta";
import {Observable} from "rxjs";
import {Ubicacion} from "../classes/ubicacion";

@Injectable({
  providedIn: 'root'
})
export class CdrService {

  private host : string = "http://10.0.2.2:8080";
  private saveRutaUrl : string = this.host + "/cdr/save-ruta";
  private getUbiUrl : string = this.host + "/cdr/get-ubi";
  constructor(private client : HttpClient) { }

  guardaRuta(r : Ruta):Observable<Object> {
    return this.client.post<Ruta>(this.saveRutaUrl, r);
  }

  listaRutasEmail(email : string) : Observable<Ubicacion[]> {
    return this.client.get<Ubicacion[]>(this.getUbiUrl + '?=' + email);
  }
}
