import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  ImagePath: string;
  isLoggedIn: boolean;
  public showLogout: boolean = false;
  showLogoutPopup: boolean = false;

  private isLoggedInSubscription!: Subscription;

  constructor(private storageService: StorageService, private router: Router) {
    this.ImagePath = '../../assets/images/logo1.png';
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  ngOnInit(): void {
    this.updateLoggedInStatus();
    this.isLoggedInSubscription = this.storageService
      .getIsLoggedInSubject()
      .subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
        this.router.navigate(['/home']);
      });
  }

  ngOnDestroy(): void {
    if (this.isLoggedInSubscription) {
      this.isLoggedInSubscription.unsubscribe();
    }
  }

  onClickIcon(): void {
    console.log('Ai apăsat pe iconiță');
    this.showLogout = !this.showLogout;
  }

  logOut(): void {
    this.storageService.logout();
    this.showLogout = false;
    this.showLogoutPopup = true;
  }

  onLogoutConfirmation(response: boolean): void {
    this.showLogoutPopup = false;

    if (response === true) {
      this.storageService.logout();
      this.router.navigate(['/intro']);
    }
  }

  private updateLoggedInStatus(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }
}
