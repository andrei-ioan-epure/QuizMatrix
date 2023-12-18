import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-domain-page',
  templateUrl: './domain-page.component.html',
  styleUrls: ['./domain-page.component.css'],
})
export class DomainPageComponent implements OnInit {
  selectedDomain: string = '';
  averageScore = 0.0;
  averageTime = 0;

  users: User[] = [
    { rank: 1, name: 'Alice', score: 1000, time: 200 },
    { rank: 2, name: 'Bob', score: 950, time: 220 },
    { rank: 3, name: 'Melisandre', score: 900, time: 215 },
    { rank: 4, name: 'Snow', score: 880, time: 300 },
    { rank: 5, name: 'Tormund', score: 870, time: 315 },
    { rank: 6, name: 'Cersei', score: 100, time: 265 },
    // ... more users ...
  ];

  teste = [
    {
      iconPath:"assets/images/biology.png",
      nume: 'Test 1',
      durata: '10',
      creation_date:'2023-12-18'
    },
    {
      nume: 'Test 2',
      durata: '10',
      creation_date:'2023-12-18'
    },
    {
      nume: 'Test 3',
      durata: '15',
      domeniu: 'Informatică',
      creation_date:'2023-12-18'
    },
    {
      nume: 'Test 4',
      durata: '15',
      domeniu: 'Geografie',
      creation_date:'2023-12-18'
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.selectedDomain = params.get('domain') || '';
      this.loadLeaderboardData(this.selectedDomain);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDomain'] && this.selectedDomain) {
      console.log(this.selectedDomain);
      this.loadLeaderboardData(this.selectedDomain);
      this.calculateStatistics();
    }
  }

  loadLeaderboardData(domain: string): void {
    // Fetch leaderboard data based on this.selectedDomain
    // Example hardcoded data (replace with actual data fetching logic)
    this.users = [
      { rank: 1, name: 'Alice', score: 1000, time: 200 },
      { rank: 2, name: 'Bob', score: 950, time: 220 },
      { rank: 3, name: 'Melisandre', score: 900, time: 215 },
      { rank: 4, name: 'Snow', score: 880, time: 300 },
      { rank: 5, name: 'Tormund', score: 870, time: 315 },
      { rank: 6, name: 'Cersei', score: 100, time: 265 },
      // ... more users for the selected domain ...
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

  startQuiz(quizTitle: string, mode: string): void {
    //de implementat
    console.log(`Starting ${quizTitle} in ${mode} mode`);
  }
}

interface User {
  rank: number;
  name: string;
  score: number;
  time: number;
}
