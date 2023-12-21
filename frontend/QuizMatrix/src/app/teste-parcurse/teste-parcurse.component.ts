import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DomainsService } from '../services/domain/domains.service';
import { TesteParcurseService } from '../services/teste-parcurse/teste-parcurse.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-teste-parcurse',
  templateUrl: './teste-parcurse.component.html',
  styleUrl: './teste-parcurse.component.css',
})
export class TesteParcurseComponent {
  teste: any[] = [];

  constructor(
    private domainService: DomainsService,
    private testeFavoriteService: TesteParcurseService,
    private location: Location,
    private storageService: StorageService
  ) {}

  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    //if(this.storageService.isLoggedIn())
    //{
    const id_user = 2;
    this.testeFavoriteService.getCompletedTests(id_user).subscribe((data) => {
      this.teste = data;
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
}
