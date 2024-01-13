// Import other necessary modules
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit timeSpent event when timer is running', (done) => {
    component.duration = 5;
    component.ngAfterViewInit();

    component.timeSpent.subscribe((time: number) => {
      expect(time).toBeLessThanOrEqual(component.duration);
      done();
    });
  });

  it('should emit timeExpired event when timer reaches zero', (done) => {
    component.duration = 2;
    component.ngAfterViewInit();

    component.timeExpired.subscribe(() => {
      done();
    });
  });
});
