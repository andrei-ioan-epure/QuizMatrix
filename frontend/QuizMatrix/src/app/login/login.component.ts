import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const registerButton = this.el.nativeElement.querySelector('#register');
    const loginButton = this.el.nativeElement.querySelector('#login');
    const container = this.el.nativeElement.querySelector('#container');

    registerButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    loginButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }
}
