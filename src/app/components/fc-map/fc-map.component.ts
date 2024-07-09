import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  GoogleMap,
  GoogleMapsModule,
  MapInfoWindow,
  MapMarker,
} from '@angular/google-maps';
import { CardModule } from 'primeng/card';
import { GeocodingService } from '../../services/geocoding.service';
interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  };
}
@Component({
  selector: 'fc-map',
  standalone: true,
  imports: [CardModule, GoogleMap, MapMarker, GoogleMapsModule],
  templateUrl: './fc-map.component.html',
  styleUrls: ['./fc-map.component.css'],
})
export class FcMapComponent implements OnChanges, OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  @Input('inputPosition') inputPosition: string ;

  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
  };
  markers: MarkerProperties[] = [
    { position: { lat: -23.1791, lng: -45.8872 } },
  ];
  zoom = 15;
  info: any;
  address: any;
  markerElem: any;
  infoContent: any;
  center: google.maps.LatLngLiteral;

  constructor(private geocodingService: GeocodingService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputPosition']) {
      if (this.inputPosition) {
        this.address = this.inputPosition;
        this.geocodingService.getLocation(this.address).subscribe(
          (data: any) => {
            let lat = data.results[0].geometry.location;
            this.center = lat;
            this.markers.push({
              position: lat,
            });
          },
          (error: any) => {
            console.error('Geocoding error:', error);
          },
          () => {
            console.log('Geocoding complete!');
          }
        );
      }
    }
  }


  ngOnInit() {
    this.center = this.markers[0].position;
  }
}
