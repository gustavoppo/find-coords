import { Component } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapMarker } from '@angular/google-maps';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'fc-map',
  standalone: true,
  imports: [CardModule, GoogleMap, MapMarker],
  templateUrl: './fc-map.component.html',
  styleUrl: './fc-map.component.css',
})
export class FcMapComponent {
  world = 0;
  continent = 5;
  city = 10;
  street = 15;
  builds = 20;

  center: google.maps.LatLngLiteral = { lat: -15.829557281659453, lng: -47.87935511823883 };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPositions.push(event.latLng.toJSON());
      console.log('long, ' ,event.latLng.lng());
      console.log('lat, ' ,event.latLng.lat());
    }
  }
}
