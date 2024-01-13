import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AnswerService } from './answer.service';
import { Answer } from '../../models/answer';

describe('AnswerService', () => {
  let service: AnswerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AnswerService],
    });

    service = TestBed.inject(AnswerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get answers', () => {
    // Arrange
    const mockAnswers: Answer[] = [
      {
        id_answer: 1,
        id_question: 1,
        answer_text: 'Answer 1',
        isCorrect: true,
      },
      {
        id_answer: 2,
        id_question: 1,
        answer_text: 'Answer 2',
        isCorrect: false,
      },
    ];

    // Act
    service.getAnswers().subscribe((retrievedAnswers) => {
      // Assert
      expect(retrievedAnswers).toEqual(mockAnswers);
    });

    // Assert
    const req = httpTestingController.expectOne(service.getApiUrl());
    expect(req.request.method).toBe('GET');
    req.flush(mockAnswers);
  });

  it('should add a new answer', () => {
    // Arrange
    const newAnswer: Answer = {
      id_answer: 3,
      id_question: 2,
      answer_text: 'New Answer',
      isCorrect: true,
    };

    // Act
    service.addAnswer(newAnswer).subscribe((addedAnswer) => {
      // Assert
      expect(addedAnswer).toEqual(newAnswer);
    });

    // Assert
    const req = httpTestingController.expectOne(service.getApiUrl());
    expect(req.request.method).toBe('POST');
    req.flush(newAnswer);
  });
});
