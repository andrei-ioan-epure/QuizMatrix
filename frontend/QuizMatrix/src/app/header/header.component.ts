import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Trebuie să fie 'styleUrls' în loc de 'styleUrl'
})
export class HeaderComponent {
  ImagePath: string;
  isLoggedIn!: boolean;
  public showLogout: boolean = false;
  showLogoutPopup: boolean = false; // Adăugat pentru a gestiona vizibilitatea popup-ului

  constructor(private storageService: StorageService, private router: Router) {
    this.ImagePath = '../../assets/images/logo1.png';
    this.updateLoggedInStatus();
  }

  onClickIcon(): void {
    console.log('Ai apăsat pe iconiță');
    this.showLogout = !this.showLogout;
  }

  ngOnInit(): void {
    // Inițializați starea de autentificare la încărcarea aplicației
    this.updateLoggedInStatus();
  }

  logOut(): void {
    this.storageService.logout();
    this.showLogout = false;
    this.showLogoutPopup = false;
    this.updateLoggedInStatus(); // Reevaluare starea isLoggedIn
  }

  updateLoggedInStatus(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }
  onLogoutConfirmation(response: boolean): void {
    // Ascunde pop-up-ul de confirmare
    this.showLogoutPopup = false;

    // Dacă utilizatorul a apăsat pe OK, atunci să facem logout
    if (response === true) {
      this.storageService.logout();
      this.updateLoggedInStatus(); // Reevaluare starea isLoggedIn
      this.router.navigate(['/login']); // Redirecționare către pagina de login
    }
  }
}

// import { Component, OnInit } from '@angular/core';
// import { StorageService } from '../services/storage.service';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css'],
// })
// export class HeaderComponent implements OnInit {
//   ImagePath: string;
//   isLoggedIn: boolean;
//   public showLogout: boolean = false;
//   showLogoutPopup: boolean = false;

//   constructor(private storageService: StorageService, private router: Router) {
//     this.ImagePath = '../../assets/images/logo1.png';
//     this.isLoggedIn = this.storageService.isLoggedIn();
//   }

//   ngOnInit(): void {
//     // Inițializați starea de autentificare la încărcarea componentei
//     this.updateLoggedInStatus();
//   }

//   onClickIcon(): void {
//     console.log('Ai apăsat pe iconiță');
//     this.showLogout = !this.showLogout;
//   }
//   updateLoggedInStatus(): void {
//     this.isLoggedIn = this.storageService.isLoggedIn();
//   }

//   // În HeaderComponent
//   logOut(): void {
//     //this.storageService.logout();
//     this.showLogout = false;
//     this.showLogoutPopup = false;
//     this.updateLoggedInStatus();
//   }

//   onLogoutConfirmation(response: boolean): void {
//     this.showLogoutPopup = false;

//     if (response === true) {
//       this.storageService.logout();
//       this.router.navigate(['/home']);
//     }
//   }
// }
