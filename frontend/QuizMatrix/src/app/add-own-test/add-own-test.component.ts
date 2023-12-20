import { Component } from '@angular/core';
import { Question } from '../models/question';
import { Quiz } from '../models/quiz';
import { AnswerService } from '../services/answerService/answer.service';
import { DomainsService } from '../services/domains.service';
import { QuizService } from '../services/quizService/quiz.service';
import { QuestionService } from '../services/questionService/question.service';
import { Answer } from '../models/answer';

@Component({
  selector: 'app-add-own-test',
  templateUrl: './add-own-test.component.html',
  styleUrls: ['./add-own-test.component.css'],
})
export class AddOwnTestComponent {

  constructor(
    private quizService: QuizService,
    private questionService: QuestionService,
    private domainsService: DomainsService,
    private answerService: AnswerService) {}

  currentState:
    | 'selectDomainLengthDuration'
    | 'enterQuestions'
    | 'quizComplete' = 'selectDomainLengthDuration';

  quizId: number = 0;
  title: string = '';
  descriere: string = '';
  selectedDomain: string = '';
  quizDuration: number = 0;
  quizLength: number = 0;
  points: number = 0;

  questionText: string = '';
  raspuns: string[] = ['', '', '', ''];
  correctAnswer: string = '';
  currentQuestion: number = 0;

  disableButtons: boolean = true;

  submitParameters() {
    console.log(this.title);
    this.domainsService.getDomainByName(this.selectedDomain).subscribe(
      (domain) => {
        const quizToAdd = new Quiz(0, domain.id_domain, this.title, this.descriere, new Date(), parseInt(this.quizDuration.toString(), 10));
        this.quizLength = parseInt(this.quizLength.toString(), 10);

        this.quizService.createQuiz(quizToAdd).subscribe(
          (quiz) => {
            this.quizId = quiz.id_quiz;
            this.currentState = 'enterQuestions';
            this.disableButtons = true;
          }
        );
      }
    );
  }

  submitQuestion() {
    const questionToAdd = new Question(0, this.quizId, this.questionText, this.points);

    this.questionService.addQuestion(questionToAdd).subscribe(
      (question) => {
        this.raspuns.forEach((answerText) => {
          const isCorrect = answerText === this.correctAnswer;
          
          const answerToAdd: Answer = new Answer(0, question.id_question, answerText, isCorrect);
  
          this.answerService.addAnswer(answerToAdd).subscribe(
            (_) => {
              
            }
          );
        });    
        
        this.questionText = '';
        this.raspuns = ['', '', '', ''];
        this.correctAnswer = '';
        this.currentQuestion++;
        this.disableButtons = true;
    
    
        if (
          this.currentState === 'enterQuestions' &&
          this.currentQuestion >= this.quizLength
        ) {
          this.currentState = 'quizComplete';
        }

      }
    )
    
  }

  startQuiz() {}

  shareQuiz() {}

  updateDisableButtons() {
    if (this.currentState == 'selectDomainLengthDuration') {
      this.disableButtons = !(
        this.quizDuration &&
        this.selectedDomain &&
        this.quizLength
      );
    } else if (this.currentState == 'enterQuestions') {
      this.disableButtons = !(
        this.questionText &&
        this.raspuns[0] &&
        this.raspuns[1] &&
        this.raspuns[2] &&
        this.raspuns[3] &&
        this.correctAnswer
      );
    }
  }
}
