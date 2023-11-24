import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteAdaugateComponent } from './teste-adaugate.component';

describe('TesteAdaugateComponent', () => {
  let component: TesteAdaugateComponent;
  let fixture: ComponentFixture<TesteAdaugateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesteAdaugateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesteAdaugateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
