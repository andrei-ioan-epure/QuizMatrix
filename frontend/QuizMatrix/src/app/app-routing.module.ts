import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllDomainsComponent } from './all-domains/all-domains.component';
import { DomainPageComponent } from './domain-page/domain-page.component';

import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';

import { IntroComponent } from './intro/intro.component';

import { ContulMeuComponent } from './contul-meu/contul-meu.component';
import { TesteParcurseComponent } from './teste-parcurse/teste-parcurse.component';
import { TesteAdaugateComponent } from './teste-adaugate/teste-adaugate.component';
import { TesteFavoriteComponent } from './teste-favorite/teste-favorite.component';
import { EditAccountComponent } from './edit-account/edit-account.component';

import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MyTestInfoComponent } from './my-test-info/my-test-info.component';

import { AddOwnTestComponent } from './add-own-test/add-own-test.component';
import { FinalTestComponent } from './final-test/final-test.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'intro',
    component: IntroComponent,
  },

  {
    path: 'my-account',
    component: ContulMeuComponent,
  },
  {
    path: 'completed-tests',
    component: TesteParcurseComponent,
  },
  {
    path: 'added-tests',
    component: TesteAdaugateComponent,
  },
  {
    path: 'favorite-tests',
    component: TesteFavoriteComponent,
  },
  {
    path: 'edit-account',
    component: EditAccountComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'final-test',
    component: FinalTestComponent,
  },

  {
    path: 'leaderboard',
    component: LeaderboardComponent,
  },
  {
    path: 'my-tests',
    component: MyTestInfoComponent,
  },

  {
    path: 'domains',
    component: AllDomainsComponent,
  },
  { path: 'domain-page/:domain', component: DomainPageComponent },
  {
    path: 'add-test',
    component: AddOwnTestComponent,
  },
  {
    path: '**',
    redirectTo: 'intro',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
