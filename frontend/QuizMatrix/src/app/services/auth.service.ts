import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backendUrl = 'http://localhost:8090/api/auth'; //url-ul backend ului

  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    const url = `${this.backendUrl}/register`;
    return this.http.post(url, user, httpOptions);
  }

  login(user: any): Observable<any> {
    console.log(user);
    const url = `${this.backendUrl}/login`;
    return this.http.post(url, user, httpOptions);
  }
}