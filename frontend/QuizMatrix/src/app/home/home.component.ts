import { Component, OnInit } from '@angular/core';
import { Cards } from './model/card';
import { CardsHomeService } from '../../app/services/cards-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  cards?: Cards;
  constructor(private readonly cardService: CardsHomeService) {}
  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }
}
