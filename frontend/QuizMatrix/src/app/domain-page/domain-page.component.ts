import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-domain-page',
  templateUrl: './domain-page.component.html',
  styleUrls: ['./domain-page.component.css']
})
export class DomainPageComponent implements OnInit {
  selectedDomain: string = '';
  quizzes: Quiz[] = [
    { title: 'Quiz 1' },
    { title: 'Quiz 2' },
    { title: 'Quiz 3' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.selectedDomain = params.get('domain') || '';
      this.loadContentForDomain();
    });
  }

  loadContentForDomain(): void {
    //adus quizzuri + date leaderboard
    this.quizzes = [
      { title: `Quiz 1 for ${this.selectedDomain}` },
      { title: `Quiz 2 for ${this.selectedDomain}` },
      { title: `Quiz 3 for ${this.selectedDomain}` }
    ];
  }

  startQuiz(quizTitle: string, mode: string): void {
    //de implementat
    console.log(`Starting ${quizTitle} in ${mode} mode`);
  }
}

interface Quiz {
  title: string;
}
