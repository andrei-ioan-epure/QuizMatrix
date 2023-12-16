import { Component, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private el: ElementRef, private authService: AuthService, private storageService: StorageService) {}
  ngOnInit(): void {
    const registerButton = this.el.nativeElement.querySelector('#register');
    const loginButton = this.el.nativeElement.querySelector('#login');
    const trueRegisterButton = this.el.nativeElement.querySelector("#true_register");
    const trueLoginButton = this.el.nativeElement.querySelector("#true_login");
    const container = this.el.nativeElement.querySelector('#container');

    registerButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    loginButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }

  login(formData: any)
  {
    console.log(formData);
    this.authService.login(formData).subscribe(
      (response) => {
        console.log("Login successful", response);
        this.storageService.saveUser(response);
      },
      (error) => {
        console.error("Login failed!", error);
      }
    )
  }

  register(formData: any)
  {
    this.authService.signup(formData).subscribe(
      (response) => {
        console.log("Register successful", response);
      },
      (error) => {
        console.error("Register failed!", error);
      }
    )
  }
}
