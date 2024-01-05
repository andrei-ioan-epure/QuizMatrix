import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Location } from '@angular/common';
import { LeaderboardService } from '../services/leaderboardService/leaderboard.service';
import { Leaderboard } from '../models/leaderboard';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage/storage.service';

interface User {
  // rank: number;
  name: string;
  score: number;
  time: number; //string;
}

interface Test {
  id: number;
  name: string;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css',
})
export class LeaderboardComponent implements OnChanges, OnInit {
  @Input() test?: Test;
  //@Input() testResult?: TestResult;

  testResult = { score: 1100, time: '04:24' };

  users: User[] = [];
  domainId = -1;
  quizId = -1;
  constructor(
    private location: Location,
    private leaderboardService: LeaderboardService,
    private userService: UserService,
    private route: ActivatedRoute,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.domainId = params['domain_id'];
      this.quizId = params['id'];

      this.leaderboardService
        .getByDomainIdAndQuizIdLeaderboard(this.domainId, this.quizId)
        .subscribe(
          (leaderboard: Leaderboard[]) => {
            console.log('Leaderboard entry retrieved:', leaderboard);
            var userId = this.storage.getUser()['id_user'];

            const idList = leaderboard.map((it) => it.id_user);
            var userResult = leaderboard.find(
              (entry) => entry.id_user === userId
            );
            this.testResult = {
              score: userResult?.score!,
              time: userResult?.time! as unknown as string,
            };

            this.userService.getUserDetailsByIds(idList).subscribe(
              (usersLeaderboard: any[]) => {
                console.log('Users retrieved:', usersLeaderboard);

                usersLeaderboard.map((user) => {
                  const leaderboardEntry = leaderboard.find(
                    (entry) => entry.id_user === user.id_user
                  );
                  this.users.push({
                    name: user.firstname + ' ' + user.lastname,
                    score: leaderboardEntry ? leaderboardEntry.score : 0,
                    time: leaderboardEntry ? leaderboardEntry.time : 0,
                  });
                });

                this.users.sort((a, b) => {
                  if (b.score - a.score !== 0) {
                    return b.score - a.score;
                  }

                  return a.time - b.time;
                });

                console.log('Users leaderboard:', this.users);
              },
              (error) => {
                console.error('Error retrieving user:', error);
              }
            );
          },
          (error) => {
            console.error('Error retrieving leaderboard:', error);
          }
        );
    });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['test'] && this.test) {
      console.log(this.test);
      this.loadLeaderboardData(this.test);
    }
  }

  loadLeaderboardData(test: Test): void {
    // Fetch leaderboard data based on this.test
    // Example hardcoded data (replace with actual data fetching logic)
    // this.users = [
    //   { rank: 1, name: 'Alice', score: 1000, time: '05:52' },
    //   { rank: 2, name: 'Bob', score: 950, time: '05:20' },
    //   { rank: 3, name: 'Melisandre', score: 900, time: '04:20' },
    //   { rank: 4, name: 'Snow', score: 880, time: '05:30' },
    //   { rank: 5, name: 'Tormund', score: 870, time: '05:20' },
    //   { rank: 6, name: 'Cersei', score: 100, time: '04:40' },
    //   // ... more users for the selected test ...
    // ];
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
    return Math.ceil(this.users.length / this.itemsPerPage);
  }
  floor(n: number): number {
    return Math.floor(n);
  }
}
