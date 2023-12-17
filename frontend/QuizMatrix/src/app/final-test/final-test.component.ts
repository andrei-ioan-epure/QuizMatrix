import { Component, OnInit } from '@angular/core';
import { QuizDataService } from '../services/quiz-data.service';

@Component({
  selector: 'app-final-test',
  templateUrl: './final-test.component.html',
  styleUrls: ['./final-test.component.css'],
})
export class FinalTestComponent implements OnInit {
  score: number = 0;
  totalTimeSpent: number = 0;

  constructor(private quizDataService: QuizDataService) {}

  ngOnInit(): void {
    // Obțineți scorul și timpul total petrecut din serviciu
    const quizData = this.quizDataService.getQuizData();
    this.score = quizData.score;
    this.totalTimeSpent = quizData.totalTimeSpent;

    // Resetați valorile în serviciu pentru a le face disponibile pentru următoarea utilizare
    this.quizDataService.resetQuizData();
  }
}
