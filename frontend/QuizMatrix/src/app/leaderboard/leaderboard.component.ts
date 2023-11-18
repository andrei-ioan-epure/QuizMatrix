import { Component } from '@angular/core';

interface User {
  rank: number;
  name: string;
  score: number;
}


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  users: User[] = [
    { rank: 1, name: 'Alice', score: 1000 },
    { rank: 2, name: 'Bob', score: 950 },
    { rank: 3, name: 'Melisandre', score: 900 },
    { rank: 4, name: 'Snow', score: 880 },
    { rank: 5, name: 'Tormund', score: 870 },
    { rank: 6, name: 'Cersei', score: 100 },
    // ... more users ...
  ];

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
