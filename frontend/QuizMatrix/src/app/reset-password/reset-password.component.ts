import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  formGroup: FormGroup = new FormGroup({});
  token: string = ""
  password: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  isSent: boolean = false;
  timer: any;

  constructor(private router: Router, private auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params["token"];
    })
    this.formGroup = new FormGroup({
      password: this.password,
    });
  }

  submitForm_reset() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);

      this.auth.resetPassword(this.formGroup.value.password, this.token).subscribe(
        (response) => {
          console.log('Password reseted', response);
          this.router.navigateByUrl("login");
        },
        (error) => {
          console.error('Failed to reset password!', error);
        }
      );
      
      // Show "Sent" text on the button
      this.isSent = true;

      // Reset the button after 5 seconds
      this.timer = setTimeout(() => {
        this.isSent = false;
      }, 5000);
    }
  }
}
