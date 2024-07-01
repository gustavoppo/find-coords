import { Component, OnInit } from '@angular/core';
import { GOOGLE_API_KEY } from '../../utils/google-key';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 teste = '';
  constructor() { }

  ngOnInit(): void {
    this.teste = GOOGLE_API_KEY;
  }
}
