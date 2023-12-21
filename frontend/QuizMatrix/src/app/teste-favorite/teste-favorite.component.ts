import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TesteFavoriteService } from '../services/teste-favorite.service';
import { StorageService } from '../services/storage.service';
import { DomainsService } from '../services/domains.service';
import { QuizService } from '../services/quizService/quiz.service';

@Component({
  selector: 'app-teste-favorite',
  templateUrl: './teste-favorite.component.html',
  styleUrl: './teste-favorite.component.css',
})
export class TesteFavoriteComponent implements OnInit{

  teste: any[] = []; 
  favoriteQuizIds = new Set<number>();

  constructor(private domainService: DomainsService,
    private testeFavoriteService: TesteFavoriteService,
    private location: Location,
    private storageService: StorageService,
    private quizService: QuizService) {}


  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    const id_user=1;
    this.testeFavoriteService.getTesteFavorite(id_user).subscribe(data => {
      this.teste = [];
      console.log(data);
      data.forEach((quizUser: any) => {
        this.quizService.getQuizById(quizUser.id_quiz).subscribe(quizDetails => {
          const quiz = quizDetails;
          this.teste.push({
            quiz: quiz
          });
        });
      });
    });
  }
  
  removeFromFavorites(idTest: number) {
    this.testeFavoriteService.removeTestFromFavorites(idTest).subscribe({
      next: (response) => {
        this.teste = this.teste.filter(test => test.quiz.id_quiz !== idTest);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  addTestToFavorites(idTest: number) {
    const id_user = 1;
    this.testeFavoriteService.addTestToFavorites(idTest, id_user).subscribe({
      next: (response) => {
        this.quizService.getQuizById(idTest).subscribe(quizDetails => {
            const quiz = quizDetails;
            const testAdaugat = {
              quiz: quiz
            };
            this.teste.push(testAdaugat);
            console.log('Test adăugat la favorite:', testAdaugat);
          
        });
      },
      error: (error) => {
        console.log('Eroare la adăugarea testului la favorite:', error);
      }
    });
}

  
}
