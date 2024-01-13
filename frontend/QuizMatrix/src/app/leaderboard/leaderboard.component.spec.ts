import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaderboardComponent } from './leaderboard.component';
import { LeaderboardService } from '../services/leaderboardService/leaderboard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../services/user/user.service';

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;
  let leaderboardService: LeaderboardService;
  let userService: UserService;
  let activatedRoute: ActivatedRoute;
  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: () => '1',
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderboardComponent],
      providers: [
        LeaderboardService,
        UserService,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
      imports: [HttpClientTestingModule, MatIconModule],
    }).compileComponents();

    spyOn(console, 'error');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    leaderboardService = TestBed.inject(LeaderboardService);
    userService = TestBed.inject(UserService);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle prevPage and nextPage functions for pagination', () => {
    console.log(
      'Initial state:',
      component.currentPage,
      'Page count:',
      component.pageCount()
    );

    component.currentPage = 0;
    component.prevPage();
    console.log(
      'After prevPage:',
      component.currentPage,
      'Page count:',
      component.pageCount()
    );
    expect(component.currentPage).toBe(0);

    component.currentPage = 1;
    component.prevPage();
    console.log(
      'After prevPage:',
      component.currentPage,
      'Page count:',
      component.pageCount()
    );
    expect(component.currentPage).toBe(0);

    component.currentPage = 2;
    component.prevPage();
    console.log(
      'After prevPage:',
      component.currentPage,
      'Page count:',
      component.pageCount()
    );
    expect(component.currentPage).toBe(1);

    component.currentPage = 2;
    component.nextPage();
    console.log(
      'After nextPage:',
      component.currentPage,
      'Page count:',
      component.pageCount()
    );
    expect(component.currentPage).toBe(2);
  });
});
