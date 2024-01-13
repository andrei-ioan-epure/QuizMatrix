import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { QuizService } from './quiz.service';
import { Quiz } from '../../models/quiz';

describe('QuizService', () => {
  let service: QuizService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(QuizService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a quiz by id', () => {
    const mockQuizId = 1;
    const mockQuiz: Quiz = {
      id_quiz: mockQuizId,
      id_domain: 1,
      title: 'Sample Quiz',
      description: 'This is a sample quiz',
      creation_date: new Date(),
      time: 10,
      questions: [],
    };

    service.getQuizById(mockQuizId).subscribe((quiz) => {
      expect(quiz).toEqual(mockQuiz);
    });

    const req = httpTestingController.expectOne(
      `${service['apiUrl']}/${mockQuizId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockQuiz);
  });

  it('should retrieve quizzes by domain id', () => {
    const mockDomainId = 1;
    const mockQuizzes: Quiz[] = [
      { id_quiz: 1, id_domain: mockDomainId, title: 'Quiz 1', description: 'Desc 1', creation_date: new Date(), time: 10, questions: [] },
      { id_quiz: 2, id_domain: mockDomainId, title: 'Quiz 2', description: 'Desc 2', creation_date: new Date(), time: 15, questions: [] },
    ];

    service.getQuizzesByDomain(mockDomainId).subscribe((quizzes) => {
      expect(quizzes).toEqual(mockQuizzes);
    });

    const req = httpTestingController.expectOne(
      `${service['apiUrl']}/byDomainId/${mockDomainId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockQuizzes);
  });

  it('should create a quiz', () => {
    const mockQuiz: Quiz = {
      id_quiz: 1,
      id_domain: 1,
      title: 'Sample Quiz',
      description: 'This is a sample quiz',
      creation_date: new Date(),
      time: 10,
      questions: [],
    };

    service.createQuiz(mockQuiz).subscribe((createdQuiz) => {
      expect(createdQuiz).toEqual(mockQuiz);
    });

    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('POST');
    req.flush(mockQuiz);
  });

  it('should retrieve random quizzes', () => {
    const mockCount = 5;
    const mockQuizzes: Quiz[] = [
      { id_quiz: 1, id_domain: 1, title: 'Quiz 1', description: 'Desc 1', creation_date: new Date(), time: 10, questions: [] },
      { id_quiz: 2, id_domain: 2, title: 'Quiz 2', description: 'Desc 2', creation_date: new Date(), time: 15, questions: [] },
      { id_quiz: 3, id_domain: 1, title: 'Quiz 3', description: 'Desc 3', creation_date: new Date(), time: 12, questions: [] },
      { id_quiz: 4, id_domain: 3, title: 'Quiz 4', description: 'Desc 4', creation_date: new Date(), time: 8, questions: [] },
      { id_quiz: 5, id_domain: 2, title: 'Quiz 5', description: 'Desc 5', creation_date: new Date(), time: 20, questions: [] },
    ];

    service.getRandomQuizzes(mockCount).subscribe((quizzes) => {
      expect(quizzes).toEqual(mockQuizzes);
    });

    const req = httpTestingController.expectOne(
      `${service['apiUrl']}/random?count=${mockCount}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockQuizzes);
  });
});
