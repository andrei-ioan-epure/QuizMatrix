import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllDomainsComponent } from './all-domains/all-domains.component';
import { DomainCardComponent } from './all-domains/domain-card/domain-card.component';
import { MatIconModule } from '@angular/material/icon';
import {
  HttpClientModule,
  HttpClient,
  withFetch,
  provideHttpClient,
} from '@angular/common/http';
import { DomainPageComponent } from './domain-page/domain-page.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { TimerComponent } from './quiz/timer/timer.component';
import { IntroComponent } from './intro/intro.component';
import { CardComponent } from './home/card/card.component';
import { ContulMeuComponent } from './contul-meu/contul-meu.component';
import { TesteParcurseComponent } from './teste-parcurse/teste-parcurse.component';
import { TesteAdaugateComponent } from './teste-adaugate/teste-adaugate.component';
import { TesteFavoriteComponent } from './teste-favorite/teste-favorite.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MyTestInfoComponent } from './my-test-info/my-test-info.component';
import { AddOwnTestComponent } from './add-own-test/add-own-test.component';
import { httpInterceptorProviders } from '../_helpers/http.interceptor';
import { AuthInterceptorProviders } from '../_helpers/auth.interceptor';
import { FinalTestComponent } from './final-test/final-test.component';
import { UsersComponent } from './users/users.component';
import { ExpireTimeComponent } from './expire-time/expire-time.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContulMeuComponent,
    TesteParcurseComponent,
    TesteAdaugateComponent,
    TesteFavoriteComponent,
    EditAccountComponent,
    CardComponent,
    IntroComponent,
    LoginComponent,
    QuizComponent,
    TimerComponent,
    LeaderboardComponent,
    MyTestInfoComponent,
    AllDomainsComponent,
    DomainCardComponent,
    DomainPageComponent,
    AddOwnTestComponent,
    FinalTestComponent,
    UsersComponent,
    ExpireTimeComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    httpInterceptorProviders,
    provideHttpClient(withFetch()),
    AuthInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
