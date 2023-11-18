import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteFavoriteComponent } from './teste-favorite.component';

describe('TesteFavoriteComponent', () => {
  let component: TesteFavoriteComponent;
  let fixture: ComponentFixture<TesteFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesteFavoriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesteFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
