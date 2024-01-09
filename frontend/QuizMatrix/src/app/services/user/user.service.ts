import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StorageService } from '../storage/storage.service';
import { catchError, throwError } from 'rxjs';

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
    return this.http.delete(url).pipe(
      catchError((error: any) => {
        if (
          error?.error?.message ===
          'Cannot delete or update a parent row: a foreign key constraint fails'
        ) {
          return throwError('Cannot delete user with associated records.');
        } else {
          return throwError('Error deleting user.');
        }
      })
    );
  }
}
