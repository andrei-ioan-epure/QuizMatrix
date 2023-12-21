import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  AfterViewInit,
  NgZone,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements AfterViewInit, OnDestroy {
  @Input() duration: number = 5;
  countdown: number = this.duration;
  private timerSubscription!: Subscription;

  @Output() timeSpent: EventEmitter<number> = new EventEmitter<number>();
  @Output() timeExpired: EventEmitter<void> = new EventEmitter<void>(); // Adăugat pentru semnalarea expirării timpului

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.zone.runOutsideAngular(() => {
        this.startTimer();
      });
    });
  }

  startTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.countdown = this.duration;

    this.timerSubscription = interval(1000).subscribe(() => {
      this.zone.run(() => {
        if (this.countdown > 0) {
          this.countdown--;
          this.timeSpent.emit(this.duration - this.countdown);
        } else {
          this.timerSubscription.unsubscribe();
          this.timeExpired.emit();
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
