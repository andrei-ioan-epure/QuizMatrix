import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroComponent } from './intro.component';
import { MatIconModule } from '@angular/material/icon';

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroComponent],
      imports: [MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
