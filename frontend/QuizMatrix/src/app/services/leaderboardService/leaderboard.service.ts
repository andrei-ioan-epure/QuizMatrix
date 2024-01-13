import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leaderboard } from '../../models/leaderboard';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  private apiUrl = 'http://localhost:8090/quiz/leaderboard';
  private leaderboards: Leaderboard[] = [];

  constructor(private httpClient: HttpClient) {}

  getLeaderboard(): Observable<Leaderboard[]> {
    return this.httpClient.get<Leaderboard[]>(this.apiUrl);
  }
  getByIdsLeaderboard(
    id_user: number,
    id_domain: number,
    id_quiz: number
  ): Observable<Leaderboard> {
    const url = `${this.apiUrl}/search`;

    const params = new HttpParams()
      .set('id_user', id_user.toString())
      .set('id_domain', id_domain.toString())
      .set('id_quiz', id_quiz.toString());
    return this.httpClient.get<Leaderboard>(url, { params });
  }
  getByDomainIdAndQuizIdLeaderboard(
    id_domain: number,
    id_quiz: number
  ): Observable<Leaderboard[]> {
    const url = `${this.apiUrl}/domainQuiz`;

    const params = new HttpParams()
      .set('id_domain', id_domain.toString())
      .set('id_quiz', id_quiz.toString());
    return this.httpClient.get<Leaderboard[]>(url, { params });
  }
  addLeaderboard(leaderboard: Leaderboard): Observable<Leaderboard> {
    return this.httpClient.post<Leaderboard>(this.apiUrl, leaderboard);
  }
  updateLeaderboard(
    id: number,
    leaderboard: Leaderboard
  ): Observable<Leaderboard> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put<Leaderboard>(url, leaderboard);
  }
  getApiUrl(): string {
    return this.apiUrl;
  }
}
