import { Component } from '@angular/core';

@Component({
  selector: 'app-add-own-test',
  templateUrl: './add-own-test.component.html',
  styleUrls: ['./add-own-test.component.css'],
})
export class AddOwnTestComponent {
  currentState:
    | 'selectDomainLengthDuration'
    | 'enterQuestions'
    | 'quizComplete' = 'selectDomainLengthDuration';

  selectedDomain: string = '';
  quizDuration: number = 0;
  quizLength: number = 0;

  questionText: string = '';
  answers: string[] = ['', '', '', ''];
  correctAnswer: number = 0;
  currentQuestion: number = 0;

  disableButtons: boolean = true;

  submitParameters() {
    this.currentState = 'enterQuestions';
    this.disableButtons = true;
  }

  submitQuestion() {
    //de implementat logica pt adaugare in baza de date

    // clear form
    this.questionText = '';
    this.answers = ['', '', '', ''];
    this.correctAnswer = 0;
    this.currentQuestion++;
    this.disableButtons = true;

    if (
      this.currentState === 'enterQuestions' &&
      this.currentQuestion >= this.quizLength
    ) {
      // Quiz completed, transition to the 'quizComplete' state
      this.currentState = 'quizComplete';
    }
  }

  submitQuiz() {}

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
        this.answers[0] &&
        this.answers[1] &&
        this.answers[2] &&
        this.answers[3] &&
        this.correctAnswer
      );
    }
  }
}
