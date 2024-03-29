import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'http://localhost:8090';
  constructor(private http: HttpClient) {}

  sendRegistrationEmail(emailDetails: any): Observable<any> {
    const url = `${this.apiUrl}/sendMailWithAttachment`;
    return this.http.post<any>(url, emailDetails);
  }
  sendQuizNotification(emailDetails: any, testName: string): Observable<any> {
    const url = `${this.apiUrl}/api/auth/send-new-test-notification?testName=${testName}`;
    return this.http.get<any>(url);
  }
}
