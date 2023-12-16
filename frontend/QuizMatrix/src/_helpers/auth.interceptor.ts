import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpEventType, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { StorageService } from '../app/services/storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptService implements HttpInterceptor {
  constructor(private storage: StorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.storage.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + this.storage.getUser().token
        }
      });
    }

    return next.handle(request);
  }
  
}
export const AuthInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptService, multi: true },
  ];