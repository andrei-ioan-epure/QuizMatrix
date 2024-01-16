import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from '../services/quizService/quiz.service';
import { QuizDataService } from '../services/quiz-data/quiz-data.service';

@Component({
  selector: 'app-expire-time',
  templateUrl: './expire-time.component.html',
  styleUrls: ['./expire-time.component.css'],
})
export class ExpireTimeComponent implements OnInit {
  quizId: number = -1;
  domainId: number = -1;
  constructor(
    private quizDataService: QuizDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const quizData = this.quizDataService.getQuizData();
    this.quizId = quizData.quizId;
    this.domainId = quizData.domainId;
    this.quizDataService.resetQuizData();
  }
}
