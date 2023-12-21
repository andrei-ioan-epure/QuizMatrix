import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TesteFavoriteService } from '../services/teste-favorite/teste-favorite.service';
import { StorageService } from '../services/storage/storage.service';
import { DomainsService } from '../services/domain/domains.service';

@Component({
  selector: 'app-teste-favorite',
  templateUrl: './teste-favorite.component.html',
  styleUrl: './teste-favorite.component.css',
})
export class TesteFavoriteComponent implements OnInit {
  teste: any[] = [];

  constructor(
    private domainService: DomainsService,
    private testeFavoriteService: TesteFavoriteService,
    private location: Location,
    private storageService: StorageService
  ) {}

  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    //if(this.storageService.isLoggedIn())
    //{
    //id_user=this.storageService.getUser().id_user);
    const id_user = 1;
    this.testeFavoriteService.getTesteFavorite(id_user).subscribe((data) => {
      this.teste = data;
      console.log(this.teste);
      this.teste.forEach((quiz) => {
        this.domainService
          .getDomainById(quiz.id_domain)
          .subscribe((domainArray) => {
            if (domainArray && domainArray.length > 0) {
              const domain = domainArray[0];
              quiz.domainName = domain.domain_name;
              quiz.iconPath = domain.icon_path;
            }
          });
      });
    });
    //}
  }

  removeFromFavorites(idTest: number) {
    this.testeFavoriteService.removeTestFromFavorites(idTest).subscribe({
      next: (response) => {
        this.teste = this.teste.filter((test) => test.quiz.id_quiz !== idTest);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
