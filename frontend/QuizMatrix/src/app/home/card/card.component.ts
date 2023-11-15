import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() image?: string;
  @Input() title?: string;
  @Input() description?: string;
}
