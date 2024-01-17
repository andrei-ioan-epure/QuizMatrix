import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FinalTestComponent } from './final-test.component';
import { QuizDataService } from '../services/quiz-data/quiz-data.service';
import { LeaderboardService } from '../services/leaderboardService/leaderboard.service';
import { StorageService } from '../services/storage/storage.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule

describe('FinalTestComponent', () => {
  let component: FinalTestComponent;
  let fixture: ComponentFixture<FinalTestComponent>;
  let quizDataService: QuizDataService;
  let leaderboardService: LeaderboardService;
  let storageService: StorageService;

  beforeEach(async () => {
    const activatedRouteSpy = { params: of({ domain_id: 1, id: 2 }) };

    TestBed.configureTestingModule({
      declarations: [FinalTestComponent],
      imports: [HttpClientModule, RouterTestingModule], // Include RouterTestingModule
      providers: [
        QuizDataService,
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        LeaderboardService,
        StorageService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FinalTestComponent);
    component = fixture.componentInstance;

    // Mock services
    quizDataService = TestBed.inject(QuizDataService);
    leaderboardService = TestBed.inject(LeaderboardService);
    storageService = TestBed.inject(StorageService);

    // Set up mock data or spy methods as needed
    spyOn(quizDataService, 'getQuizData').and.returnValue({
      quizId: 1,
      domainId: 1,
      score: 10,
      totalTimeSpent: 100,
    });
    spyOn(quizDataService, 'resetQuizData');
    spyOn(storageService, 'getUser').and.returnValue({ id_user: 123 });

    // If needed, set up additional spies or mock data for LeaderboardService methods

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests based on your component's functionality
});
