import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { QuizComponent } from './quiz.component';
import { QuizService } from '../services/quizService/quiz.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Answer } from '../models/answer';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;
  let quizService: QuizService;

  beforeEach(() => {
    const mockActivatedRoute = {
      params: of(convertToParamMap({})),
    };

    TestBed.configureTestingModule({
      declarations: [QuizComponent],
      providers: [
        QuizService,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
      imports: [HttpClientTestingModule],
    });

    spyOn(console, 'error');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    quizService = TestBed.inject(QuizService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct answer text by ID and index', () => {
    component.answers = new Map<number, Answer[]>();
    const questionId = 1;
    const answerArray: Answer[] = [
      {
        id_question: questionId,
        id_answer: 1,
        answer_text: 'Answer1',
        isCorrect: false,
      },
      {
        id_question: questionId,
        id_answer: 2,
        answer_text: 'Answer2',
        isCorrect: true,
      },
    ];
    component.answers.set(questionId, answerArray);

    const result = component.getAnswerTextById(questionId, 0);

    expect(result).toEqual('Answer1');
  });
  it('should return an empty string for non-existing question', () => {
    component.questions = [
      {
        id_question: 1,
        id_quiz: 1,
        points: 20,
        text: 'Question 1',
        answers: [],
      },
      {
        id_question: 2,
        id_quiz: 1,
        points: 15,
        text: 'Question 2',
        answers: [],
      },
    ];
    // Act
    const result = component.getQuestionTextById(2);

    expect(result).toEqual('');
  });

  it('should return the correct question text by ID', () => {
    component.questions = [
      {
        id_question: 1,
        id_quiz: 1,
        points: 20,
        text: 'Question 1',
        answers: [],
      },
      {
        id_question: 2,
        id_quiz: 1,
        points: 15,
        text: 'Question 2',
        answers: [],
      },
    ];

    const result = component.getQuestionTextById(0);

    expect(result).toEqual('Question 1');
  });
});
