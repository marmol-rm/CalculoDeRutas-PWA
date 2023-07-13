import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

var iconRetinaUrl = 'assets/marker-icon-2x.png';
var iconUrl = 'assets/marker-icon.png';
var shadowUrl = 'assets/marker-shadow.png';
var destination : string;
var map: L.Map;
var localMarker: L.Marker;
var marker : L.Marker;

@Component({
  selector: 'app-vista-mapa',
  templateUrl: './vista-mapa.component.html',
  styleUrls: ['./vista-mapa.component.css']
})
export class VistaMapaComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.setMap();
  }

  private setMap(): void {
    navigator.geolocation.watchPosition(exito, error);

    function exito(pos: { coords: { latitude: number; longitude: number; accuracy: number; }; }) {
      console.log(pos);
      const ltt = pos.coords.latitude;
      const lgt = pos.coords.longitude;
      const acu = pos.coords.accuracy;

      const iconDefault = L.icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [25, 42],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      });
      L.Marker.prototype.options.icon = iconDefault;

      if(map == null) map = L.map('map').setView([ltt, lgt], 16);

      /*localMarker = L.marker([ltt, lgt], {draggable : false}).addTo(map);
      localMarker.bindPopup('Usted está aquí', {autoPan : false});
      localMarker.setLatLng([ltt, lgt]);*/

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '<b>&copy;OpenStreetMap | Sistema de Cálculo de Rutas</b>'
      }).addTo(map);

      if(localMarker != null) map.removeLayer(localMarker);
      localMarker = L.marker([ltt, lgt], {draggable : false}).addTo(map);
      localMarker.bindPopup('Usted está aquí', {keepInView : true});
      localMarker.setLatLng([ltt, lgt]);

      map.on('click', function (e) {
        marker = L.marker(e.latlng, {draggable : false}).addTo(map);
        map.off('click'); // Deshabilitamos la adicion de más marcadores
        map.removeLayer(marker);

        L.Routing.control({
          waypoints: [
            L.latLng(localMarker.getLatLng()),
            L.latLng(e.latlng.lat, e.latlng.lng)
          ], addWaypoints : false, waypointMode : "snap"
        }).on('routesfound', function (e) {
          console.log(e);
          e.routes[0].coordinates.forEach(function (coord:any, index:number) {
            //setTimeout(() => {
            //  localMarker.setLatLng([coord.lat, coord.lng]);
            //}, index*500);
          })

          if(e.routes[0].name != null) {
            destination = e.routes[0].name;
          }
          if(e.routes[0].summary.totalDistance < 10) {
            alert("Ha llegado a su destino: " + destination);
            //map.removeLayer(marker);
            //map.removeLayer(localMarker);
            map = map.remove();
            map = L.map('map').setView([ltt, lgt], 16);
            alert("Se han guardado los datos de su viaje.");
          }
        }).addTo(map);
      });
    }

    function error() {
      alert("Por favor habilite el acceso a la ubicación para continuar.");
    }
  }
}
