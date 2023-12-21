import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expire-time',
  templateUrl: './expire-time.component.html',
  styleUrl: './expire-time.component.css',
})
export class ExpireTimeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  retakeQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}
