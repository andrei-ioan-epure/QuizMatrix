import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StorageService } from '../storage/storage.service';

const API_URL = 'http://localhost:8090/user/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + this.storage.getUser().id_user, {
      responseType: 'text',
    });
  }
}
