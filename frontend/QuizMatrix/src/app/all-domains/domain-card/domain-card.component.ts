import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-domain-card',
  templateUrl: './domain-card.component.html',
  styleUrl: './domain-card.component.css'
})
export class DomainCardComponent {
  @Input() image?: string;
  @Input() title?: string;
}
