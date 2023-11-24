import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOwnTestComponent } from './add-own-test.component';

describe('AddOwnTestComponent', () => {
  let component: AddOwnTestComponent;
  let fixture: ComponentFixture<AddOwnTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOwnTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOwnTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
