import { Component, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { StorageService } from '../services/storage/storage.service';
import { EmailService } from '../services/email/email.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  message: string = '';
  constructor(
    private el: ElementRef,
    private authService: AuthService,
    private storageService: StorageService,
    private readonly emailService: EmailService
  ) {}
  ngOnInit(): void {
    const registerButton = this.el.nativeElement.querySelector('#register');
    const loginButton = this.el.nativeElement.querySelector('#login');
    const trueRegisterButton =
      this.el.nativeElement.querySelector('#true_register');
    const trueLoginButton = this.el.nativeElement.querySelector('#true_login');
    const container = this.el.nativeElement.querySelector('#container');

    registerButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    loginButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }

  login(formData: any) {
    this.message = '';
  
    if (!formData.email || !formData.password) {
      this.message = 'Adresa de email și parola sunt obligatorii!';
      return;
    }
  
    this.authService.login(formData).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.storageService.saveUser(response);
      },
      (error) => {
        console.error('Login failed!', error);
        this.message = 'Datele sunt invalide. Verificați adresa de email și parola.';
      }
    );
  }
  

  register(formData: any) {
    this.message = '';
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.password) {
      this.message = 'Toate câmpurile sunt obligatorii!';
      console.log(this.message)
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      this.message = 'Parolele nu se potrivesc!';
      return;
    }
    if (formData.email) {
      const emailDetails = {
        recipient: formData.email,
      };
   
      this.authService.signup(formData).subscribe(
        (response) => {
          console.log('Register successful', response);
          this.emailService.sendRegistrationEmail(emailDetails).subscribe(
            (emailResponse) => {
              console.log('E-mail trimis cu succes!', emailResponse);
              this.message = 'Un email de confirmare a fost trimis la '+formData.email;
            },
            (emailError) => {
              console.error('Eroare la trimiterea e-mailului', emailError);
            }
          );
        },
        (error) => {
          console.error('Register failed!', error);
        }
      );
    } else {
      console.error('Adresa de email lipseste in formData!');
    }
  }

  isLoggedIn(): boolean {
    return this.storageService.isLoggedIn();
  }
}