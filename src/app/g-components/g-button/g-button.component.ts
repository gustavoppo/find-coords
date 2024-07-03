import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'g-button',
  standalone: true,
  imports: [],
  templateUrl: './g-button.component.html',
  styleUrl: './g-button.component.css',
})
export class GButtonModule implements OnInit {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() text: boolean = false;
  @Input() rounded: boolean = false;
  @Input() outline: boolean = false;
  @Input() raised: boolean = false;
  @Input() level: string = 'primary';
  btnStyle: string = '';
  constructor() {}

  ngOnInit(): void {}
}
