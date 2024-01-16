import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AddOwnTestComponent } from './add-own-test.component';
import { DomainsService } from '../services/domain/domains.service';
import { QuizService } from '../services/quizService/quiz.service';
import { QuestionService } from '../services/questionService/question.service';
import { AnswerService } from '../services/answerService/answer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddOwnTestComponent', () => {
  let component: AddOwnTestComponent;
  let fixture: ComponentFixture<AddOwnTestComponent>;

  // Mock services
  const domainsServiceMock = jasmine.createSpyObj('DomainsService', ['getDomainByName']);
  const quizServiceMock = jasmine.createSpyObj('QuizService', ['createQuiz']);
  const questionServiceMock = jasmine.createSpyObj('QuestionService', ['addQuestion']);
  const answerServiceMock = jasmine.createSpyObj('AnswerService', ['addAnswer']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOwnTestComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [
        { provide: DomainsService, useValue: domainsServiceMock },
        { provide: QuizService, useValue: quizServiceMock },
        { provide: QuestionService, useValue: questionServiceMock },
        { provide: AnswerService, useValue: answerServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddOwnTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with selectDomainLengthDuration state', () => {
    expect(component.currentState).toBe('selectDomainLengthDuration');
  });

  it('should disable buttons initially', () => {
    expect(component.disableButtons).toBe(true);
  });

  it('should update disableButtons property when calling updateDisableButtons()', () => {
    component.updateDisableButtons();
    expect(component.disableButtons).toBe(true); // Assuming initial state has required fields empty
  });

  it('should update currentState and disableButtons when submitParameters is called', fakeAsync(() => {
    domainsServiceMock.getDomainByName.and.returnValue(of({ id_domain: 1 }));
    quizServiceMock.createQuiz.and.returnValue(of({ id_quiz: 1 }));

    component.submitParameters();
    tick();

    expect(component.currentState).toBe('enterQuestions');
    expect(component.disableButtons).toBe(true);
  }));

  it('should update currentState and disableButtons when submitQuestion is called', fakeAsync(() => {
    questionServiceMock.addQuestion.and.returnValue(of({ id_question: 1 }));
    answerServiceMock.addAnswer.and.returnValue(of({}));

    component.currentState = 'enterQuestions';
    component.currentQuestion = component.quizLength - 1;
    component.submitQuestion();
    tick();

    expect(component.currentState).toBe('quizComplete');
    expect(component.disableButtons).toBe(true);
  }));
});
