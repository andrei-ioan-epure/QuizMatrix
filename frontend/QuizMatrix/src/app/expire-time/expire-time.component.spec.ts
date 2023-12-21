import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpireTimeComponent } from './expire-time.component';

describe('ExpireTimeComponent', () => {
  let component: ExpireTimeComponent;
  let fixture: ComponentFixture<ExpireTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpireTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpireTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
