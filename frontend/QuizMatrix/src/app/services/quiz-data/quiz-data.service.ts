import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizDataService {
  private score: number = 0;
  private totalTimeSpent: number = 0;

  setQuizData(score: number, totalTimeSpent: number): void {
    this.score = score;
    this.totalTimeSpent = totalTimeSpent;
  }

  getQuizData(): { score: number; totalTimeSpent: number } {
    return { score: this.score, totalTimeSpent: this.totalTimeSpent };
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
