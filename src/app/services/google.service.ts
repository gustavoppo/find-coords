import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  private apiKey = 'AIzaSyAAmX-6CwT88VsT1SMftqjwmsyzeJtEEOE';
  private geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json`;

  constructor(private http: HttpClient) {}

  getCoordinates(address: string): Observable<any> {
    const url = `${this.geocodeUrl}?address=${encodeURIComponent(address)}&key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
