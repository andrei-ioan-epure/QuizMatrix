import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { QuizDataService } from '../services/quiz-data/quiz-data.service';
import { ExpireTimeComponent } from './expire-time.component';

describe('ExpireTimeComponent', () => {
  let component: ExpireTimeComponent;
  let fixture: ComponentFixture<ExpireTimeComponent>;
  let router: jasmine.SpyObj<Router>;
  let quizDataService: jasmine.SpyObj<QuizDataService>;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const quizDataServiceSpy = jasmine.createSpyObj('QuizDataService', [
      'getQuizData',
      'resetQuizData',
    ]);

    TestBed.configureTestingModule({
      declarations: [ExpireTimeComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: QuizDataService, useValue: quizDataServiceSpy },
      ],
    });

    fixture = TestBed.createComponent(ExpireTimeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    quizDataService = TestBed.inject(
      QuizDataService
    ) as jasmine.SpyObj<QuizDataService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize quizId on ngOnInit', () => {
    // Arrange
    const quizData = { quizId: 42, score: 0, totalTimeSpent: 0 };
    quizDataService.getQuizData.and.returnValue(quizData);

    // Act
    component.ngOnInit();

    // Assert
    expect(component.quizId).toEqual(quizData.quizId);
    expect(quizDataService.resetQuizData).toHaveBeenCalled();
  });
});
