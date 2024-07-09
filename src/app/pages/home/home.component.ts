import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FcMapComponent } from '../../components/fc-map/fc-map.component';
import { FcSearchComponent } from '../../components/fc-search/fc-search.component';
import { GButtonModule } from '../../g-components/g-button/g-button.component';
import { GOOGLE_API_KEY } from '../../utils/google-key';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FcSearchComponent, GButtonModule, FcMapComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  inputPosition = '';
  teste = '';
  constructor() {}

  ngOnInit(): void {
    this.teste = GOOGLE_API_KEY;
  }

  inputPositionEvent(event:any){
    this.inputPosition = event;
  }
}
