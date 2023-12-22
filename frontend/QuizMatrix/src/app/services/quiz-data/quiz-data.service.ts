import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizDataService {
  private quizId: number = -1;
  private score: number = 0;
  private totalTimeSpent: number = 0;

  setQuizData(quizId: number, score: number, totalTimeSpent: number): void {
    this.quizId = quizId;
    this.score = score;
    this.totalTimeSpent = totalTimeSpent;
  }

  getQuizData(): { quizId: number; score: number; totalTimeSpent: number } {
    return {
      quizId: this.quizId,
      score: this.score,
      totalTimeSpent: this.totalTimeSpent,
    };
  }

  resetQuizData(): void {
    this.score = 0;
    this.totalTimeSpent = 0;
  }

  setTotalTimeSpent(totalTimeSpent: number): void {
    this.totalTimeSpent = totalTimeSpent;
  }

  getTotalTimeSpent(): number {
    return this.totalTimeSpent;
  }
}
