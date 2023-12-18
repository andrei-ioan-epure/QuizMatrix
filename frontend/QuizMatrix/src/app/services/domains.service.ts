import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomainsService {

  private baseUrl = 'http://localhost:8090/domain';

  constructor(private http: HttpClient) { }

  getDomainById(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}?id=${id}`);
  }
}
