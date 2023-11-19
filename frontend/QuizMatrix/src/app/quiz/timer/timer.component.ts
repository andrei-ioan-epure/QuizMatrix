import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  AfterViewInit,
  NgZone,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements AfterViewInit, OnDestroy {
  @Input() duration: number = 5; //default value(seconds)
  countdown: number = this.duration;
  private timerSubscription!: Subscription;
  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.zone.runOutsideAngular(() => {
        console.log('start timer');
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
        } else {
          this.timerSubscription.unsubscribe();
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
