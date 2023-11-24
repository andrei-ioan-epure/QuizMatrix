import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestInfoComponent } from './my-test-info.component';

describe('MyTestInfoComponent', () => {
  let component: MyTestInfoComponent;
  let fixture: ComponentFixture<MyTestInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTestInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
