import { Component, OnInit } from '@angular/core';
import { GOOGLE_API_KEY } from '../../utils/google-key';
import { FcSearchComponent } from '../../components/fc-search/fc-search.component';
import { GButtonModule } from '../../g-components/g-button/g-button.component';
import { FcMapComponent } from '../../components/fc-map/fc-map.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FcSearchComponent, GButtonModule, FcMapComponent,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  teste = '';
  constructor() {}

  ngOnInit(): void {
    this.teste = GOOGLE_API_KEY;
  }
}
