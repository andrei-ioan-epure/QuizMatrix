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
      providers: [QuizService],
    });

    service = TestBed.inject(QuizService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    // Arrange and Act
    expect(service).toBeTruthy();
  });

  it('should retrieve a quiz by ID from the API', () => {
    // Arrange
    const mockQuiz: Quiz = {
      id_quiz: 1,
      id_domain: 1,
      title: 'Test Quiz',
      description: 'Description for the quiz',
      creation_date: new Date(),
      time: 20,
      questions: [],
    };

    // Act
    service.getQuizById(1).subscribe((quiz) => {
      // Assert
      expect(quiz).toEqual(mockQuiz);
    });

    // Assert
    const req = httpTestingController.expectOne(`${service.getApiUrl()}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockQuiz);
  });

  it('should retrieve quizzes by domain ID from the API', () => {
    // Arrange
    const mockQuizzes: Quiz[] = [
      {
        id_quiz: 1,
        id_domain: 1,
        title: 'Quiz 1',
        description: 'Description for Quiz 1',
        creation_date: new Date(),
        time: 20,
        questions: [],
      },
      {
        id_quiz: 2,
        id_domain: 1,
        title: 'Quiz 2',
        description: 'Description for Quiz 2',
        creation_date: new Date(),
        time: 15,
        questions: [],
      },
    ];

    // Act
    service.getQuizzesByDomain(1).subscribe((quizzes) => {
      // Assert
      expect(quizzes).toEqual(mockQuizzes);
    });

    // Assert
    const req = httpTestingController.expectOne(
      `${service.getApiUrl()}/byDomainId/1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockQuizzes);
  });

  it('should create a new quiz via the API', () => {
    // Arrange
    const newQuiz: Quiz = {
      id_quiz: 1,
      id_domain: 1,
      title: 'New Quiz',
      description: 'Description for the new quiz',
      creation_date: new Date(),
      time: 25,
      questions: [],
    };

    // Act
    service.createQuiz(newQuiz).subscribe((createdQuiz) => {
      // Assert
      expect(createdQuiz).toEqual(newQuiz);
    });

    // Assert
    const req = httpTestingController.expectOne(service.getApiUrl());
    expect(req.request.method).toBe('POST');
    req.flush(newQuiz);
  });

  it('should retrieve random quizzes from the API', () => {
    // Arrange
    const mockQuizzes: Quiz[] = [
      {
        id_quiz: 1,
        id_domain: 1,
        title: 'Random Quiz 1',
        description: 'Description for Random Quiz 1',
        creation_date: new Date(),
        time: 20,
        questions: [],
      },
      {
        id_quiz: 2,
        id_domain: 1,
        title: 'Random Quiz 2',
        description: 'Description for Random Quiz 2',
        creation_date: new Date(),
        time: 15,
        questions: [],
      },
    ];

    // Act
    service.getRandomQuizzes(2).subscribe((quizzes) => {
      // Assert
      expect(quizzes).toEqual(mockQuizzes);
    });

    // Assert
    const req = httpTestingController.expectOne(
      `${service.getApiUrl()}/random?count=2`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockQuizzes);
  });
});
