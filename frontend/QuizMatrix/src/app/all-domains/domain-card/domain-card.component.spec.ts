import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainCardComponent } from './domain-card.component';

describe('DomainCardComponent', () => {
  let component: DomainCardComponent;
  let fixture: ComponentFixture<DomainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DomainCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DomainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the image property', () => {
    component.image = 'test-image-url';
    fixture.detectChanges();

    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('.images');
    expect(imgElement.src).toContain('test-image-url');
  });

  it('should have the title property', () => {
    component.title = 'Test Title';
    fixture.detectChanges();

    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector('.content label');
    expect(labelElement.textContent).toContain('Test Title');
  });

});
