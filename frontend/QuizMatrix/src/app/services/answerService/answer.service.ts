import { Injectable } from '@angular/core';
import { Answer } from '../../models/answer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  private apiUrl = 'http://localhost:8090/quiz/answer';
  private answers: Answer[] = [];

  constructor(private httpClient: HttpClient) {}

  getAnswers(): Observable<Answer[]> {
    return this.httpClient.get<Answer[]>(this.apiUrl);
  }

  addAnswer(answer: Answer): Observable<Answer> {
    return this.httpClient.post<Answer>(this.apiUrl, answer);
  }
}
