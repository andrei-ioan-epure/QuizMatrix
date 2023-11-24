import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteParcurseComponent } from './teste-parcurse.component';

describe('TesteParcurseComponent', () => {
  let component: TesteParcurseComponent;
  let fixture: ComponentFixture<TesteParcurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesteParcurseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesteParcurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
