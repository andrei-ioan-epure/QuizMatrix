import { TestBed } from '@angular/core/testing';
import { CardsDomainService } from './cards-domain.service';

describe('CardsDomainService', () => {
  let service: CardsDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of domain cards with expected properties', () => {
    const cards = service.getCards();

    expect(Array.isArray(cards)).toBeTruthy();

    cards.forEach((card) => {
      expect(card.image).toBeDefined();
      expect(card.title).toBeDefined();
    });

    expect(cards.length).toBe(9);
  });

});
