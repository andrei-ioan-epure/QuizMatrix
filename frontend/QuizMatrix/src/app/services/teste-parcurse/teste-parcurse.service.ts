import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteParcurseService {

  private baseUrl = 'http://localhost:8090/completed_tests'; 

  private testAdaugatLaParcurse = new Subject<any>();


  constructor(private http: HttpClient) { }

  getCompletedTests(id_user: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getByIdUser?id_user=${id_user}`);
  }

  addTestToCompleted(id_quiz:number,id_user:number,score:number): Observable<any> {
    const currentDate = new Date();
    const completedTest = {
      id_quiz: id_quiz,
      id_user: id_user,
      score:score,
      date_completed:currentDate.toISOString()
    };
    return this.http.post(this.baseUrl, completedTest);
  }
  testAdaugat(test: any) {
    this.testAdaugatLaParcurse.next(test);
  }


  getTestAdaugatListener() {
    return this.testAdaugatLaParcurse.asObservable();
  }
}
