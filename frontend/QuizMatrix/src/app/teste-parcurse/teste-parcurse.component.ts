import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DomainsService } from '../services/domain/domains.service';
import { TesteParcurseService } from '../services/teste-parcurse/teste-parcurse.service';
import { StorageService } from '../services/storage/storage.service';
import { QuizService } from '../services/quizService/quiz.service';
import { QuizDataService } from '../services/quiz-data/quiz-data.service';

@Component({
  selector: 'app-teste-parcurse',
  templateUrl: './teste-parcurse.component.html',
  styleUrl: './teste-parcurse.component.css',
})
export class TesteParcurseComponent {
  teste: any[] = [];
  quizId: number = -1;
  completedQuizIds = new Set<number>();

  constructor(
    private testeParcurseService: TesteParcurseService,
    private location: Location,
    private storageService: StorageService,
    private quizService: QuizService,
    private quizDataService: QuizDataService,
  ) {}

  goBack(): void {
    this.location.back();
  }
  ngOnInit() { 
    const quizData = this.quizDataService.getQuizData();
      this.quizId = quizData.quizId;
      this.quizDataService.resetQuizData();

    if (this.storageService.isLoggedIn()) {
     
      let id_user = this.storageService.getUser()["id_user"];
      this.testeParcurseService.getCompletedTests(id_user).subscribe(data => {
        this.teste = [];
        console.log(data);
        data.forEach((quizUser: any) => {
          this.quizService.getQuizById(quizUser.id_quiz).subscribe(quizDetails => {
            const quizWithExtraData = {
              quiz: quizDetails,
              score: quizUser.score,
              date_completed: quizUser.date_completed 
            };
            this.teste.push(quizWithExtraData);
            console.log(this.teste);
          });
        });
      });
    }
  
  }
  
}
