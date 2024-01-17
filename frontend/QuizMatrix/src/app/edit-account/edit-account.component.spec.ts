import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountComponent } from './edit-account.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('EditAccountComponent', () => {
  let component: EditAccountComponent;
  let fixture: ComponentFixture<EditAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAccountComponent],
      imports: [MatCheckboxModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
