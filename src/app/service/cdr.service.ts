import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ruta} from "../classes/ruta";
import {Observable} from "rxjs";
import {Ubicacion} from "../classes/ubicacion";
import {RutaMain} from "../classes/ruta-main";
import {Usuario} from "../classes/usuario";

@Injectable({
  providedIn: 'root'
})
export class CdrService {

  //private host : string = "http://10.0.2.2:8080";
  private host : string = "http://localhost:8080";
  private saveUserUrl : string = this.host + "/cdr/save-user";
  private saveRutaUrl : string = this.host + "/cdr/save-ruta";
  private getRutasUrl : string = this.host + "/cdr/get-rutas";
  private getUbiUrl : string = this.host + "/cdr/get-ubi";

  private _email : string;

  constructor(private client : HttpClient) { }



  guardaUsuario(u : Usuario):Observable<Object> {
    return this.client.post<Usuario>(this.saveUserUrl, u);
  }

  guardaRuta(r : Ruta):Observable<Object> {
    return this.client.post<Ruta>(this.saveRutaUrl, r);
  }

  listaRutasFecha(fecha : string) : Observable<RutaMain[]> {
    return this.client.get<RutaMain[]>(this.getRutasUrl + '?fecha=' + fecha);
  }

  listaUbiEmail(email : string) : Observable<Ubicacion[]> {
    return this.client.get<Ubicacion[]>(this.getUbiUrl + '?email=' + email);
  }

  getEmail(): string {
    return this._email;
  }

  setEmail(value: string) {
    this._email = value;
  }
}