import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CardsDomainService } from '../services/cards-domain.service';
import { DomainCards } from './model/domain-card';

@Component({
  selector: 'app-domain',
  templateUrl: './all-domains.component.html',
  styleUrls: ['./all-domains.component.css'],
})
export class AllDomainsComponent implements OnInit {
  cards: DomainCards = [];

  constructor(
    private router: Router,
    private cardsService: CardsDomainService
  ) {}

  ngOnInit(): void {
    this.cards = this.cardsService.getCards();
  }

  navigateToDomain(domainTitle: string): void {
    console.log(`Navigating to quizzes for ${domainTitle}`);
    this.router.navigate([`/domain-page/${domainTitle}`]);
  }
}
