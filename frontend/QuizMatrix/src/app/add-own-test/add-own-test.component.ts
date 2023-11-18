import { Component } from '@angular/core';

@Component({
  selector: 'app-add-own-test',
  templateUrl: './add-own-test.component.html',
  styleUrls: ['./add-own-test.component.css']
})
export class AddOwnTestComponent {
  questionText: string = '';
  answers: string[] = ['', '', '', ''];
  correctAnswer: number = 0;
  selectedDomain: string = '';
  currentQuestion: number = 0;
  disableButtons: boolean = true;
  quizDuration: number = 0;

  submitQuestion() {
    //de implementat logica pt adaugare in baza de date prin servicii etc 

    // clear form
    this.questionText = '';
    this.answers = ['', '', '', ''];
    this.correctAnswer = 0;
    this.currentQuestion++;

    this.disableButtons = this.currentQuestion < 5;
  }
}