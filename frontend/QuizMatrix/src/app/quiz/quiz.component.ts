import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {
  @ViewChild('timerComponent') timerComponent?: TimerComponent;

  @Input() questions = new Array<string>();
  @Input() answers = new Map<number, string[]>();
  @Input() increment: number = 0;
  time: number = 10;

  ngOnInit(): void {
    this.questions = [
      'What is the capital of England?',
      'Who wrote "Romeo and Juliet"?',
      'In which year did World War I begin?',
      'Which planet is known as the Red Planet?',
      'What is the largest mammal in the world?',
      'Who painted the Mona Lisa?',
      'What is the currency of Japan?',
      'Which element has the chemical symbol "O"?',
      'What is the longest river in the world?',
      'Who is known as the "Father of Computer Science"?',
    ];
    this.answers.set(0, ['Paris', 'Berlin', 'London', 'Russia']);
    this.answers.set(1, [
      'William Shakespeare',
      'Jane Austen',
      'Charles Dickens',
      'Mark Twain',
    ]);
    this.answers.set(2, ['1914', '1918', '1939', '1945']);
    this.answers.set(3, ['Mars', 'Venus', 'Jupiter', 'Saturn']);
    this.answers.set(4, ['Blue Whale', 'Elephant', 'Giraffe', 'Hippopotamus']);
    this.answers.set(5, [
      'Leonardo da Vinci',
      'Vincent van Gogh',
      'Pablo Picasso',
      'Claude Monet',
    ]);
    this.answers.set(6, ['Yen', 'Won', 'Ringgit', 'Baht']);
    this.answers.set(7, ['Oxygen', 'Gold', 'Silver', 'Iron']);
    this.answers.set(8, ['Nile', 'Amazon', 'Yangtze', 'Mississippi']);
    this.answers.set(9, [
      'Alan Turing',
      'Bill Gates',
      'Steve Jobs',
      'Mark Zuckerberg',
    ]);
  }
  nextQuestion(): void {
    if (this.increment < this.questions.length - 1) {
      this.increment += 1;
      this.time = 10;
      this.resetTimer();
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
