import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';
import { Answer } from '../models/answer';
import { Question } from '../models/question';

import { ActivatedRoute, Router } from '@angular/router';
import { QuizDataService } from '../services/quiz-data/quiz-data.service';
import { QuizService } from '../services/quizService/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {
  @ViewChild('timerComponent') timerComponent?: TimerComponent;

  @Input() questions: Question[] = [];
  @Input() answers = new Map<number, Answer[]>();
  @Input() increment: number = 0;
  time!: number;
  totalTimeSpent: number = 0;
  selectedAnswer: number = -1;
  responses: Answer[] = [];
  quizId = -1;
  constructor(
    private router: Router,
    private quizDataService: QuizDataService,
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizId = params['id'];
      this.quizService.getQuizById(this.quizId).subscribe((quiz) => {
        this.time = quiz.time;
        this.questions = quiz.questions;
        quiz.questions.forEach((q: Question) => {
          this.answers.set(q.id_question, q.answers);
        });
      });
    });
  }

  getAnswerTextById(id: number, index: number): string {
    const answerArray = this.answers.get(id);
    return answerArray ? answerArray[index]?.answer_text : '';
  }
  getQuestionTextById(id: number): string {
    const question = this.questions[id];
    return question ? question.text : '';
  }
  printAnswerById(id: number): void {
    const answerArray = this.answers.get(id);

    if (answerArray) {
      console.log(
        `Answer at position ${id}:`,
        answerArray[0]?.answer_text,
        answerArray[0]?.isCorrect
      );
    } else {
      console.log(`No answers found for question ID ${id}`);
    }
  }

  nextQuestion(): void {
    const currentAnswers = this.answers.get(this.increment + 1);

    if (currentAnswers && this.selectedAnswer !== -1) {
      this.responses.push(currentAnswers[this.selectedAnswer]);
    }

    if (this.increment < this.questions.length - 1) {
      this.increment += 1;
      //  this.time = 10;
      // this.resetTimer();
      console.log(this.increment);
    }
    this.selectedAnswer = -1;
    console.log('Responses:', this.responses);
  }

  finishQuiz() {
    const currentAnswers = this.answers.get(this.increment + 1);

    console.log('cureent', currentAnswers);
    if (currentAnswers) {
      this.responses.push(currentAnswers[this.selectedAnswer]);
    }
    console.log('Raspunsuri:', this.responses);
    const score = this.responses
      .filter((response) => response.isCorrect)
      .map((response) =>
        this.questions.find(
          (question) => question.id_question === response.id_question
        )
      )
      .filter((question) => question !== undefined)
      .reduce(
        (totalScore, question) => totalScore + (question?.points || 0),
        0
      );

    console.log('Score', score);
    console.log('Time', this.time);
    this.quizDataService.setQuizData(
      this.quizId,
      score,
      this.time - this.totalTimeSpent
    );
    this.router.navigate(['/final-test']);
  }

  onTimeSpent(timeSpent: number): void {
    this.totalTimeSpent = timeSpent;
  }
  isLastQuestion(): boolean {
    return this.increment === this.questions.length - 1;
  }

  getQuestionPoints(): number | undefined {
    const currentQuestion = this.questions[this.increment];
    return currentQuestion?.points;
  }

  selectAnswer(index: number): void {
    this.selectedAnswer = index === this.selectedAnswer ? -1 : index;
  }
  onTimerExpired(): void {
    console.log('Timer expired. Finishing quiz and navigating to /expire-time');
    this.finishQuiz();
    this.router.navigate(['/expire-time']);
  }
}
