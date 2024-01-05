import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QuizService } from '../services/quizService/quiz.service';
import { DomainsService } from '../services/domain/domains.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  quizzes?: Quiz[];

  iconpaths: string[] = [];

  constructor(private readonly quizService: QuizService, 
    private readonly domainService: DomainsService,
    private router: Router) {}

  ngOnInit(): void {
    this.quizService.getRandomQuizzes(4).subscribe(
      (quizzes) => {
        this.quizzes = quizzes;

        this.quizzes.forEach((quiz) => {
          this.domainService.getDomainById(quiz.id_domain).subscribe(
            (domainInfo) => {
              this.iconpaths.push(domainInfo.icon_path);
              console.log(quiz.description);
              console.log(domainInfo.icon_path);
              console.log(domainInfo.domain_name);
            }
          );
        });
      }
    );
  }

  navigateToQuiz(quizId: number): void {
    this.router.navigate(['/quiz', quizId]);
  }
}

