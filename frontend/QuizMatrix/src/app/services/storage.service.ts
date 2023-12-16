import { DOCUMENT, isPlatformBrowser  } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID  } from '@angular/core';

const USER_KEY = 'auth_user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(@Inject(DOCUMENT) private _doc: Document, @Inject(PLATFORM_ID) private platformId: Object) {}

  private getWindow(): Window | null {
    if (isPlatformBrowser(this.platformId)) {
      return this._doc.defaultView;
    }
    return null;
  }

  clean(): void {
    this.getWindow()?.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    this.getWindow()?.sessionStorage.removeItem(USER_KEY);
    this.getWindow()?.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = this.getWindow()?.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = this.getWindow()?.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
