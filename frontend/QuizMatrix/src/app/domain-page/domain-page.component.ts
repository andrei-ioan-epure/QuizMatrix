import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../models/quiz';
import { QuizService } from '../services/quizService/quiz.service';
import { Domain } from '../models/domain';
import { DomainsService } from '../services/domain/domains.service';
import { TesteFavoriteService } from '../services/teste-favorite/teste-favorite.service';

@Component({
  selector: 'app-domain-page',
  templateUrl: './domain-page.component.html',
  styleUrls: ['./domain-page.component.css'],
})
export class DomainPageComponent implements OnInit {
  domainName: string = '';
  domain?: Domain;
  averageScore = 0.0;
  averageTime = 0;
  favoriteQuizIds = new Set<number>();

  leaderboardUsers: User[] = [];

  quizzes: Quiz[] = [];

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private domainsService: DomainsService,
    private testeFavoriteService: TesteFavoriteService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.domainName = params['domain'];
    });

    this.loadContent();
  }

  loadContent() {
    this.domainsService.getDomainByName(this.domainName).subscribe((domain) => {
      this.domain = domain;
      console.log(domain);
      this.quizService
        .getQuizzesByDomain(this.domain.id_domain)
        .subscribe((quizzes) => {
          this.quizzes = quizzes;
          this.loadLeaderboardData(this.domainName);
          this.calculateStatistics();
        });
    });
  }

  loadLeaderboardData(domain: string): void {
    this.leaderboardUsers = [
      { rank: 1, name: 'Alice', score: 1000, time: 200 },
      { rank: 2, name: 'Bob', score: 950, time: 220 },
      { rank: 3, name: 'Melisandre', score: 900, time: 215 },
      { rank: 4, name: 'Snow', score: 880, time: 300 },
      { rank: 5, name: 'Tormund', score: 870, time: 315 },
      { rank: 6, name: 'Cersei', score: 100, time: 265 },
    ];
  }

  calculateStatistics(): void {
    const totalScores = this.leaderboardUsers.reduce(
      (acc, user) => acc + user.score,
      0
    );
    const totalTimes = this.leaderboardUsers.reduce(
      (acc, user) => acc + user.time,
      0
    );
    this.averageScore = totalScores / this.leaderboardUsers.length;
    this.averageTime = totalTimes / this.leaderboardUsers.length;
  }

  currentPage: number = 0;
  itemsPerPage: number = 5;

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    console.log('hi');
    if (this.currentPage < this.pageCount() - 1) {
      this.currentPage++;
    }
  }

  pageCount(): number {
    return Math.ceil(this.leaderboardUsers.length / this.itemsPerPage);
  }

  floor(n: number): number {
    return Math.floor(n);
  }

  startQuiz(id_quiz: number, mode: string): void {
    //de implementat
    console.log(`Starting ${id_quiz} in ${mode} mode`);
  }

  toggleFavorite(quiz: any) {
    const isCurrentlyFavorite = this.favoriteQuizIds.has(quiz.id_quiz);
    console.log(quiz.id_quiz);

    if (isCurrentlyFavorite) {
      this.favoriteQuizIds.delete(quiz.id_quiz);
      this.removeTestFromFavorites(quiz.id_quiz);
    } else {
      this.favoriteQuizIds.add(quiz.id_quiz);
      this.addTestToFavorites(quiz.id_quiz);
    }
  }
  removeTestFromFavorites(idTest: number) {
    this.testeFavoriteService.removeTestFromFavorites(idTest).subscribe({
      next: (response) => {
        this.testeFavoriteService.testSters(response);
        console.log('Test sters de la favorite:', response);
      },
      error: (error) => {
        console.log('Eroare la stergerea testului din favorite:', error);
      },
    });
  }

  addTestToFavorites(idTest: number) {
    const id_user = 1;
    this.testeFavoriteService.addTestToFavorites(idTest, id_user).subscribe({
      next: (response) => {
        this.testeFavoriteService.testAdaugat(response);
        console.log('Test adăugat la favorite:', response);
      },
      error: (error) => {
        console.log('Eroare la adăugarea testului la favorite:', error);
      },
    });
  }
}

interface User {
  rank: number;
  name: string;
  score: number;
  time: number;
}
