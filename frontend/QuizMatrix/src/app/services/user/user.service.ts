import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StorageService } from '../storage/storage.service';

const API_URL = 'http://localhost:8090/api/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${API_URL}/users`);
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${API_URL}/users/${userId}`;
    return this.http.delete(url);
  }

  getUserDetailsByIds(userIds: number[]): Observable<any[]> {
    const url = `${API_URL}/users/ids`;
    const params = new HttpParams().set('ids', userIds.join(','));
    return this.http.get<any[]>(url, { params });
  }
}
