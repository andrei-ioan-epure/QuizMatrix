// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from './services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(): boolean {
    if (this.storageService.isUserAdmin()) {
      return true;
    } else {
      this.router.navigate(['/']); // Redirect to the home page if not an admin
      return false;
    }
  }
}
