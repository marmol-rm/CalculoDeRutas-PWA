import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

export const TITULO = 'Cálculo de Rutas';
var iconRetinaUrl = 'assets/marker-icon-2x.png';
var iconUrl = 'assets/marker-icon.png';
var shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-vista-mapa',
  templateUrl: './vista-mapa.component.html',
  styleUrls: ['./vista-mapa.component.css']
})
export class VistaMapaComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    var map: L.Map;
    navigator.geolocation.watchPosition(exito, error);

    function exito(pos: { coords: { latitude: number; longitude: number; accuracy: number; }; }) {
      const ltt = pos.coords.latitude;
      const lgt = pos.coords.longitude;
      const acu = pos.coords.accuracy;

      var iconDefault = L.icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [35, 55],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      });
      L.Marker.prototype.options.icon = iconDefault;

      map = L.map('map').setView([ltt, lgt], 17);
      var marker = L.marker([ltt, lgt]).addTo(map);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      map.on('click', function (e) {
        var mark = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

        L.Routing.control({
          waypoints: [
            L.latLng(ltt,lgt),
            L.latLng(e.latlng.lat, e.latlng.lng)
          ]
        }).on('routesfound', function (e) {
          console.log(e);
        }).addTo(map);
      });

    }

    function error() {

    }
  }

}
