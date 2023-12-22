import { Component, OnInit } from '@angular/core';
import { QuizDataService } from '../services/quiz-data/quiz-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-test',
  templateUrl: './final-test.component.html',
  styleUrls: ['./final-test.component.css'],
})
export class FinalTestComponent implements OnInit {
  score: number = 0;
  totalTimeSpent: number = 0;
  quizId: number = -1;

  constructor(
    private quizDataService: QuizDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const quizData = this.quizDataService.getQuizData();
    this.score = quizData.score;
    this.totalTimeSpent = quizData.totalTimeSpent;
    this.quizId = quizData.quizId;
    this.quizDataService.resetQuizData();
  }

  // retryTest(): void {
  //   this.router.navigate(['/quiz']);
  // }
}
