import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import { AnswerService } from '../services/answerService/answer.service';
import { QuestionService } from '../services/questionService/question.service';

import { Router } from '@angular/router';
import { QuizDataService } from '../services/quiz-data.service';

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
  time: number = 100;
  totalTimeSpent: number = 0;
  selectedAnswer: number = -1;
  responses: Answer[] = [];
  constructor(
    private router: Router,
    private answerService: AnswerService,
    private questionService: QuestionService,
    private quizDataService: QuizDataService
  ) {}
  ngOnInit(): void {
    console.log('meree');
    console.log(this.answers);
    console.log(this.questions);
    this.questionService.getQuestions().subscribe((questions) => {
      this.questions = questions;

      this.answerService.getAnswers().subscribe((answers) => {
        this.questions.forEach((question) => {
          const answersForQuestion = answers.filter(
            (answer) => answer.id_question === question.id_question
          );

          this.answers.set(question.id_question, answersForQuestion);
        });
        console.log(this.answers);

        this.printAnswerById(1);
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
    const currentAnswers = this.answers.get(this.increment);

    if (currentAnswers && this.selectedAnswer !== -1) {
      this.responses.push(currentAnswers[this.selectedAnswer]);
    }

    if (this.increment < this.questions.length - 1) {
      this.increment += 1;
      this.time = 10;
      // this.resetTimer();
      console.log(this.increment);
    }
    this.selectedAnswer = -1;
    console.log('Responses:', this.responses);
  }

  finishQuiz() {
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

    console.log(score);
    this.quizDataService.setQuizData(score, this.totalTimeSpent);
    // this.quizDataService.setTotalTimeSpent(this.totalTimeSpent);
    //this.router.navigate(['/final-test']);
  }

  onTimeSpent(timeSpent: number): void {
    this.totalTimeSpent = timeSpent;
  }
  isLastQuestion(): boolean {
    return this.increment === this.questions.length - 1;
  }
  // resetTimer() {
  //   if (this.timerComponent) {
  //     this.timerComponent.startTimer();
  //   } else {
  //     this.finishQuiz();
  //   }
  // }

  // finishQuiz() {
  //   this.quizDataService.setTotalTimeSpent(this.totalTimeSpent);
  //   this.router.navigate(['/final-test']);
  // }

  // onTimeSpent(timeSpent: number): void {
  //   this.totalTimeSpent = timeSpent;
  // }

  getQuestionPoints(): number | undefined {
    const currentQuestion = this.questions[this.increment];
    return currentQuestion?.points;
  }

  selectAnswer(index: number): void {
    this.selectedAnswer = index === this.selectedAnswer ? -1 : index;
  }
}
