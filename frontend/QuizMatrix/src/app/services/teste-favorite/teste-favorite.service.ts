import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteFavoriteService {

  private baseUrl = 'http://localhost:8090/quiz_user'; 
  private testAdaugatLaFavorite = new Subject<any>();
  private testStersDinFavorite = new Subject<any>();


  constructor(private http: HttpClient) { }

  getTesteFavorite(id_user: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getByIdUser?id_user=${id_user}`);
  }
  removeTestFromFavorites(id_quiz: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete?id_quiz=${id_quiz}`);
  }
  addTestToFavorites(id_quiz:number,id_user:number): Observable<any> {
    const quizUser = {
      id_quiz: id_quiz,
      id_user: id_user
    };
    return this.http.post(this.baseUrl, quizUser);
  }
  testAdaugat(test: any) {
    this.testAdaugatLaFavorite.next(test);
  }
  testSters(test:any){
    this.testStersDinFavorite.next(test);
  }
  getTestStersListener() {
    return this.testStersDinFavorite.asObservable();
  }

  getTestAdaugatListener() {
    return this.testAdaugatLaFavorite.asObservable();
  }
}