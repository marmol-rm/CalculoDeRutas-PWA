import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import {Ruta} from "../classes/ruta";
import {CdrService} from "../service/cdr.service";
import {Router} from "@angular/router";

var iconRetinaUrl = './assets/pointer.png';
var iconUrl =  './assets/pointer.png';
var shadowUrl = 'assets/marker-shadow.png';
var destination : string;
var localMarker: L.Marker;
var ruta : Ruta;


@Component({
  selector: 'app-vista-mapa',
  templateUrl: './vista-mapa.component.html',
  styleUrls: ['./vista-mapa.component.css']
})
export class VistaMapaComponent implements OnInit {
  private service: CdrService;

  constructor(private s : CdrService, private router : Router) {
    this.service = s;
  }

  ngOnInit(): void {
    this.setMap();
  }

  redirectUbi() {
    this.router.navigate(['/ubi'], {
      state : {email : history.state.email}
    })
  }

  redirectRut() {
    this.router.navigate(['/today'], {
      state : {email : history.state.email}
    })
  }

  private setMap(): void {
    const s = this.service;
    let email = history.state.email;
    navigator.geolocation.watchPosition(exito, error,
      {enableHighAccuracy: true, maximumAge: 10000})

    function saveRoute(r : Ruta) {
      r.horaFin = new Date();
      console.log(r)
      // Se guarda la ruta recorrida
      if(r) {
       s.guardaRuta(r).subscribe()
      }
    }

    function exito(this: any, pos: { coords: { latitude: number; longitude: number; accuracy: number; }; } ) {
      console.log(pos)
      var ltt = pos.coords.latitude
      var lgt = pos.coords.longitude
      var acu = pos.coords.accuracy
      var marker: L.Marker
      ruta = new Ruta();

      const iconDefault = L.icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [35, 34],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      })

      ruta.usuEmail = email;

      L.Marker.prototype.options.icon = iconDefault

      var map = L.map('map').setView([ltt, lgt], 17);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '<b>&copy;OpenStreetMap | Sistema de Cálculo de Rutas</b>'
      }).addTo(map)

      if(localMarker) map.removeLayer(localMarker)
      localMarker = L.marker([ltt, lgt], {
        draggable : false,
        title : 'Ubicación actual'})
        .bindPopup('Usted está aquí')
        .addTo(map)

      map.on('dblclick', function (e) {
        var marker = L.marker(e.latlng, {
          draggable: false, alt: "Destino",
          interactive: false})
          .addTo(map)

        if(!ruta.horaInicio)
            ruta.horaInicio = new Date()
        if(!ruta.coordPartida)
          ruta.coordPartida = [ltt, lgt].toString()
        if(!ruta.coordDestino)
          ruta.coordDestino = [e.latlng.lat, e.latlng.lng].toString()

        map.removeLayer(marker)
        map.off('dblclick') // Deshabilitamos la adicion de más marcadores

        L.Routing.control({
          addWaypoints: false
        }).setWaypoints([
          L.latLng([ltt, lgt]),
          L.latLng([e.latlng.lat, e.latlng.lng])])
          .on('routesfound', (e: any) => {
            console.log(e)

            if(!ruta.distanciaTotal)
              ruta.distanciaTotal = e.routes[0].summary.totalDistance

            if(!ruta.tiempoTotal)
              ruta.tiempoTotal = e.routes[0].summary.totalTime

            if (e.routes[0].name != "") {
              destination = e.routes[0].name
              ruta.ubiDestino = destination
              if(!ruta.ubiPartida)
                ruta.ubiPartida = e.routes[0].name
            }

            const dif = 0.0003;
            let latdif = e.routes[0].coordinates[0].lat - ltt;
            let lngdif = e.routes[0].coordinates[1].lng - lgt;
            /*
            console.log(dif)
            console.log(latdif)
            console.log(lngdif)
            */

            if (e.routes[0].summary.totalDistance < 10) {
            //if(latdif < dif && lngdif < dif) {
              alert("Ha llegado a su destino: " + destination);
              map = map.remove()
              saveRoute(ruta)
              alert("Se han guardado los datos de su viaje.");
              navigator.geolocation.watchPosition(exito, error)
            }
          }).addTo(map)
      })
    }

    function error() {
      alert("Por favor habilite el acceso a la ubicación para continuar.")
    }
  }
}
