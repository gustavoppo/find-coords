import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fc-search',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './fc-search.component.html',
  styleUrl: './fc-search.component.css',
})
export class FcSearchComponent implements OnInit {
  ngOnInit() {}
}
