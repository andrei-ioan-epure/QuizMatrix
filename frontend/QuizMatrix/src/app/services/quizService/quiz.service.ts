import { Injectable } from '@angular/core';
import { Quiz } from '../../models/quiz';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost:8090/quiz';
  private quizzes: Quiz[] = [];

  constructor(private httpClient: HttpClient) {}

  getQuizzes(): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(this.apiUrl);
  }

  getQuizzesByDomain(id_domain: number) {
    return this.httpClient.get<Quiz[]>(`${this.apiUrl}/byDomainId/${id_domain}`);
  }
}