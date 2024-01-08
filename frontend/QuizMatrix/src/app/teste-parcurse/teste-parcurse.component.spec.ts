import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteParcurseComponent } from './teste-parcurse.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { StorageService } from '../services/storage/storage.service';
import { QuizDataService } from '../services/quiz-data/quiz-data.service';
import { TesteParcurseService } from '../services/teste-parcurse/teste-parcurse.service';
import { QuizService } from '../services/quizService/quiz.service';
import { of } from 'rxjs';

describe('TesteParcurseComponent', () => {
  let component: TesteParcurseComponent;
  let fixture: ComponentFixture<TesteParcurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatIconModule
      ],
      declarations: [TesteParcurseComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TesteParcurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data on ngOnInit', () => {
    const storageService = TestBed.inject(StorageService);
    spyOn(storageService, 'isLoggedIn').and.returnValue(true);
    const quizDataService = TestBed.inject(QuizDataService);
    spyOn(quizDataService, 'getQuizData').and.returnValue({ quizId: 123, score: 0, totalTimeSpent: 0 });
    spyOn(quizDataService, 'resetQuizData').and.callThrough();
    const testeParcurseService = TestBed.inject(TesteParcurseService);
    spyOn(testeParcurseService, 'getCompletedTests').and.returnValue(of([])); // Presupunem că întoarce un array gol

    component.ngOnInit();

    expect(quizDataService.resetQuizData).toHaveBeenCalled();
    expect(storageService.isLoggedIn).toHaveBeenCalled();
    expect(testeParcurseService.getCompletedTests).toHaveBeenCalled();
  });

});
