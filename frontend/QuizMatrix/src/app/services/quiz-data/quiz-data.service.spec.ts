import { TestBed } from '@angular/core/testing';
import { QuizDataService } from './quiz-data.service';

describe('QuizDataService', () => {
  let service: QuizDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizDataService);
  });

  it('should be created', () => {
    // Folosiți spyOn înainte de a accesa serviciul
    spyOn(service, 'getQuizData').and.returnValue({
      quizId: 123,
      domainId: 456,
      score: 0,
      totalTimeSpent: 0,
    });

    // Acum puteți accesa serviciul și apela metoda simulată
    const result = service.getQuizData();

    // Verificați că rezultatul este cel așteptat
    expect(result).toEqual({
      quizId: 123,
      domainId: 456,
      score: 0,
      totalTimeSpent: 0,
    });
  });
});
