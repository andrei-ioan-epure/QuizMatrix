import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteParcurseService {

  private baseUrl = 'http://localhost:8090/completed_tests'; 

  constructor(private http: HttpClient) { }

  getCompletedTests(id_user: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getByIdUser?id_user=${id_user}`);
  }
  // removeTestFromFavorites(id_quiz: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/delete?id_quiz=${id_quiz}`);
  // }
}
