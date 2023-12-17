import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import { AnswerService } from '../services/answerService/answer.service';
import { QuestionService } from '../services/questionService/question.service';

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

  constructor(
    private answerService: AnswerService,
    private questionService: QuestionService
  ) {}
  ngOnInit(): void {
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
    if (this.increment < this.questions.length - 1) {
      this.increment += 1;
      this.time = 10;
      // this.resetTimer();
      console.log(this.increment);
    }
  }
  resetTimer() {
    if (this.timerComponent) {
      this.timerComponent.startTimer();
    } else {
      console.error('Timer component is undefined.');
    }
  }
}
