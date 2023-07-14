import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

var iconRetinaUrl = 'assets/marker-icon-2x.png';
var iconUrl = 'assets/marker-icon.png';
var shadowUrl = 'assets/marker-shadow.png';
var destination : string;
//var map: L.Map;
var localMarker: L.Marker;

@Component({
  selector: 'app-vista-mapa',
  templateUrl: './vista-mapa.component.html',
  styleUrls: ['./vista-mapa.component.css']
})
export class VistaMapaComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.setMap()
  }

  private setMap(): void {
    navigator.geolocation.getCurrentPosition(exito, error)

    function exito(pos: { coords: { latitude: number; longitude: number; accuracy: number; }; }) {
      console.log(pos);
      var ltt = pos.coords.latitude
      var lgt = pos.coords.longitude
      var acu = pos.coords.accuracy
      var marker: L.Marker

      const iconDefault = L.icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [25, 42],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      })

      L.Marker.prototype.options.icon = iconDefault

      var map = L.map('map').setView([ltt, lgt], 16)

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '<b>&copy;OpenStreetMap | Sistema de Cálculo de Rutas</b>'
      }).addTo(map)

      if(localMarker) map.removeLayer(localMarker)
      localMarker = L.marker([ltt, lgt], {draggable : false}).addTo(map)
      localMarker.bindPopup('Usted está aquí', {keepInView : true})

      map.on('dblclick', function (e) {
        var marker = L.marker(e.latlng, {draggable: false, interactive: false}).addTo(map)
        if (marker) map.removeLayer(marker)
        map.off('dblclick') // Deshabilitamos la adicion de más marcadores

        L.Routing.control({
          addWaypoints: false
        }).setWaypoints([
          L.latLng([ltt, lgt]),
          L.latLng(e.latlng.lat, e.latlng.lng)])
          .on('routesfound', function (e:any) {
            console.log(e)

            if (e.routes[0].name != null) {
              destination = e.routes[0].name;
            }
            if (e.routes[0].summary.totalDistance < 10) {
              alert("Ha llegado a su destino: " + destination);
              map = map.remove()
              alert("Se han guardado los datos de su viaje.");
              navigator.geolocation.getCurrentPosition(exito, error)
            }
          }).addTo(map)
      })
    }

    function error() {
      alert("Por favor habilite el acceso a la ubicación para continuar.")
    }
  }
}
