import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';

import { IntroComponent } from './intro/intro.component';

import { ContulMeuComponent } from './contul-meu/contul-meu.component';
import { TesteParcurseComponent } from './teste-parcurse/teste-parcurse.component';
import { TesteAdaugateComponent } from './teste-adaugate/teste-adaugate.component';
import { TesteFavoriteComponent } from './teste-favorite/teste-favorite.component';
import { EditAccountComponent } from './edit-account/edit-account.component';

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
    path: '**',
    redirectTo: 'intro',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
