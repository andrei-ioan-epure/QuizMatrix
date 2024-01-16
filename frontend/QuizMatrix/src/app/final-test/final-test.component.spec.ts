import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { FinalTestComponent } from './final-test.component';
import { HttpClientModule } from '@angular/common/http';
import { LeaderboardService } from '../services/leaderboardService/leaderboard.service';
import { StorageService } from '../services/storage/storage.service';

describe('FinalTestComponent', () => {
  let component: FinalTestComponent;
  let fixture: ComponentFixture<FinalTestComponent>;
  let leaderboardServiceSpy: jasmine.SpyObj<LeaderboardService>;

  beforeEach(async () => {
    const activatedRouteSpy = { paramMap: of({ get: () => 'some-value' }) };

    leaderboardServiceSpy = jasmine.createSpyObj('LeaderboardService', [
      'getByIdsLeaderboard',
    ]);

    await TestBed.configureTestingModule({
      declarations: [FinalTestComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: LeaderboardService, useValue: leaderboardServiceSpy },
        StorageService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FinalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
