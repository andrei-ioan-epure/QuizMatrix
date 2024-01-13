import { TestBed } from '@angular/core/testing';
import { CardsHomeService } from './cards-home.service';

describe('CardsHomeService', () => {
  let service: CardsHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of home cards with expected properties', () => {
    const cards = service.getCards();

    expect(Array.isArray(cards)).toBeTruthy();

    cards.forEach((card) => {
      expect(card.image).toBeDefined();
      expect(card.title).toBeDefined();
      expect(card.description).toBeDefined();
    });

    expect(cards.length).toBe(4);
  });

});
