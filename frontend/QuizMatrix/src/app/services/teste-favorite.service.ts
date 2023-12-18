import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteFavoriteService {

  private baseUrl = 'http://localhost:8090/quiz_user'; 

  constructor(private http: HttpClient) { }

  getTesteFavorite(id_user: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getByIdUser?id_user=${id_user}`);
  }
  removeTestFromFavorites(id_quiz: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete?id_quiz=${id_quiz}`);
  }
}
