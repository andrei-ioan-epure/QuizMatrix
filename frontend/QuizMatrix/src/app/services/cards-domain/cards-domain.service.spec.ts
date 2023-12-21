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
});
