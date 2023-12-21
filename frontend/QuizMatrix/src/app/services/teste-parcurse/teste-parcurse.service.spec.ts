import { TestBed } from '@angular/core/testing';

import { TesteParcurseService } from './teste-parcurse.service';

describe('TesteParcurseService', () => {
  let service: TesteParcurseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesteParcurseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
