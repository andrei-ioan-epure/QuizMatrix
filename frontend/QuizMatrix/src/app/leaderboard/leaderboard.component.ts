import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface User {
  rank: number;
  name: string;
  score: number;
  time: string;
}

interface Test {
  id: number;
  name: string;
}

interface TestResult {
  score: number;
  time: number;
  // ... any other properties of the test result
}


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent implements OnChanges{
  @Input() test?: Test;
  //@Input() testResult?: TestResult;

  testResult = { score: 1100, time: "04:24"}

  users: User[] = [
    { rank: 1, name: 'Alice', score: 1000 , time: "05:52"},
    { rank: 2, name: 'Bob', score: 950, time: "05:20" },
    { rank: 3, name: 'Melisandre', score: 900, time: "04:20" },
    { rank: 4, name: 'Snow', score: 880 , time: "05:30"},
    { rank: 5, name: 'Tormund', score: 870, time: "05:20" },
    { rank: 6, name: 'Cersei', score: 100, time: "04:40" },
    // ... more users ...
  ];


  ngOnChanges(changes: SimpleChanges): void {
    if (changes["test"] && this.test) {
      console.log(this.test);
      this.loadLeaderboardData(this.test);
    }
  }

  loadLeaderboardData(test: Test): void {
    // Fetch leaderboard data based on this.test
    // Example hardcoded data (replace with actual data fetching logic)
    this.users = [
      { rank: 1, name: 'Alice', score: 1000 , time: "05:52"},
      { rank: 2, name: 'Bob', score: 950, time: "05:20" },
      { rank: 3, name: 'Melisandre', score: 900, time: "04:20" },
      { rank: 4, name: 'Snow', score: 880 , time: "05:30"},
      { rank: 5, name: 'Tormund', score: 870, time: "05:20" },
      { rank: 6, name: 'Cersei', score: 100, time: "04:40" },
      // ... more users for the selected test ...
    ];
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
}
