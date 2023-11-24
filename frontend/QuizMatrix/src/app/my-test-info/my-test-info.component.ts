import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';

interface Test {
  id: number;
  name: string;
}

interface User {
  rank: number;
  name: string;
  score: number;
  time: number;
}

@Component({
  selector: 'app-my-test-info',
  templateUrl: './my-test-info.component.html',
  styleUrl: './my-test-info.component.css'
})
export class MyTestInfoComponent {
  @Input() test?: Test;

  averageScore = 0.0;
  averageTime = 0;

  users: User[] = [
    { rank: 1, name: 'Alice', score: 1000 , time: 200},
    { rank: 2, name: 'Bob', score: 950, time: 220 },
    { rank: 3, name: 'Melisandre', score: 900, time: 215 },
    { rank: 4, name: 'Snow', score: 880 , time: 300},
    { rank: 5, name: 'Tormund', score: 870, time: 315 },
    { rank: 6, name: 'Cersei', score: 100, time: 265 },
    // ... more users ...
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["test"] && this.test) {
      console.log(this.test);
      this.loadLeaderboardData(this.test);
      this.calculateStatistics();
    }
  }

  loadLeaderboardData(test: Test): void {
    // Fetch leaderboard data based on this.test
    // Example hardcoded data (replace with actual data fetching logic)
    this.users = [
      { rank: 1, name: 'Alice', score: 1000 , time: 200},
      { rank: 2, name: 'Bob', score: 950, time: 220 },
      { rank: 3, name: 'Melisandre', score: 900, time: 215 },
      { rank: 4, name: 'Snow', score: 880 , time: 300},
      { rank: 5, name: 'Tormund', score: 870, time: 315 },
      { rank: 6, name: 'Cersei', score: 100, time: 265 },
      // ... more users for the selected test ...
    ];
  }

  calculateStatistics(): void {
    const totalScores = this.users.reduce((acc, user) => acc + user.score, 0);
    const totalTimes = this.users.reduce((acc, user) => acc + user.time, 0);
    this.averageScore = totalScores / this.users.length;
    this.averageTime = totalTimes / this.users.length;
  }

  currentPage: number = 0;
  itemsPerPage: number = 5;

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    console.log("hi");
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
