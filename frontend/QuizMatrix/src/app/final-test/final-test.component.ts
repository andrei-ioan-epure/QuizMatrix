import { Component, OnInit } from '@angular/core';
import { QuizDataService } from '../services/quiz-data/quiz-data.service';
import { ActivatedRoute } from '@angular/router';
import { LeaderboardService } from '../services/leaderboardService/leaderboard.service';
import { Leaderboard } from '../models/leaderboard';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-final-test',
  templateUrl: './final-test.component.html',
  styleUrls: ['./final-test.component.css'],
})
export class FinalTestComponent implements OnInit {
  score: number = 0;
  totalTimeSpent: number = 0;
  quizId: number = -1;
  domainId: number = -1;
  constructor(
    private route: ActivatedRoute,
    private quizDataService: QuizDataService,
    private leaderboardService: LeaderboardService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    const quizData = this.quizDataService.getQuizData();
    this.score = quizData.score;
    this.totalTimeSpent = quizData.totalTimeSpent;
    this.quizId = quizData.quizId;
    this.quizDataService.resetQuizData();
    this.route.params.subscribe((params) => {
      this.domainId = params['domain_id'];
      this.quizId = params['id'];

      this.addNewScoreInLeaderboard();
    });
  }

  addNewScoreInLeaderboard() {
    var userId = this.storage.getUser()['id_user'];
    var newEntry = new Leaderboard(
      userId,
      this.domainId,
      this.quizId,
      this.score,
      this.totalTimeSpent
    );

    this.leaderboardService
      .getByIdsLeaderboard(
        newEntry.id_user,
        newEntry.id_domain,
        newEntry.id_quiz
      )
      .subscribe(
        (leaderboard: Leaderboard) => {
          console.log('Leaderboard entry retrieved:', leaderboard);
          this.updateEntry(leaderboard.id_leaderboard, newEntry);
        },
        (error) => {
          if (error.status == 404) {
            this.addNewEntry(newEntry);
          } else console.error('Error:', error);
        }
      );
  }

  addNewEntry(newEntry: Leaderboard) {
    console.log('Creare');

    this.leaderboardService.addLeaderboard(newEntry).subscribe(
      (addedLeaderboard: Leaderboard) => {
        console.log('Leaderboard entry added ');
      },
      (error) => {
        console.error('Error adding leaderboard :', error);
      }
    );
  }
  updateEntry(id: number, newEntry: Leaderboard) {
    console.log('Actualizare');
    this.leaderboardService.updateLeaderboard(id, newEntry).subscribe(
      (updatedLeaderboard: Leaderboard) => {
        console.log('Leaderboard updated:', updatedLeaderboard);
      },
      (error) => {
        console.error('Error updating leaderboard :', error);
      }
    );
  }

  // retryTest(): void {
  //   this.router.navigate(['/quiz']);
  // }
}
