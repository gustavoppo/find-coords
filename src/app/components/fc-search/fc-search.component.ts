import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'fc-search',
  standalone: true,
  imports: [CardModule, ButtonModule, FormsModule],
  templateUrl: './fc-search.component.html',
  styleUrl: './fc-search.component.css',
})
export class FcSearchComponent implements OnInit {
  @Output() getInput: EventEmitter<any> = new EventEmitter<any>();
  address = '';
  ngOnInit() {}

  searchCoord(event: any) {
    this.getInput.emit(event);
  }
}
