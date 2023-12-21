import { TestBed } from '@angular/core/testing';

import { TesteFavoriteService } from './teste-favorite.service';

describe('TesteFavoriteService', () => {
  let service: TesteFavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesteFavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
