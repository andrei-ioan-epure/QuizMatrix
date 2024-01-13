import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AllDomainsComponent } from './all-domains.component';
import { CardsDomainService } from '../services/cards-domain/cards-domain.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { DomainCards } from './model/domain-card';

describe('AllDomainsComponent', () => {
  let component: AllDomainsComponent;
  let fixture: ComponentFixture<AllDomainsComponent>;
  let cardsServiceSpy: jasmine.SpyObj<CardsDomainService>;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockCards: DomainCards = [
    { title: 'Domain1', image: 'path1' },
    { title: 'Domain2', image: 'path2' },
  ];

  beforeEach(() => {
    cardsServiceSpy = jasmine.createSpyObj('CardsDomainService', ['getCards']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [AllDomainsComponent],
      providers: [
        { provide: CardsDomainService, useValue: cardsServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
      imports: [RouterTestingModule], // Import RouterTestingModule for testing navigation
    }).compileComponents();

    fixture = TestBed.createComponent(AllDomainsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch cards on initialization', () => {
    cardsServiceSpy.getCards.and.returnValue(mockCards);
    component.ngOnInit();
    expect(cardsServiceSpy.getCards).toHaveBeenCalled();
    expect(component.cards).toEqual(mockCards);
  });

  it('should navigate to the correct domain page', () => {
    const domainTitle = 'Domain1';
    component.navigateToDomain(domainTitle);
    expect(routerSpy.navigate).toHaveBeenCalledWith([`/domain-page/${domainTitle}`]);
  });

  it('should render domain cards', () => {
    cardsServiceSpy.getCards.and.returnValue(mockCards);
    fixture.detectChanges();

    const domainItems = fixture.nativeElement.querySelectorAll('.domain-item');
    expect(domainItems.length).toBe(mockCards.length);

    for (let i = 0; i < mockCards.length; i++) {
      const card = mockCards[i];
      const renderedTitle = domainItems[i].querySelector('p').textContent.trim();
      expect(renderedTitle).toBe(card.title);

      const renderedImage = domainItems[i].querySelector('img');
      expect(renderedImage).toBeTruthy();
      expect(renderedImage.getAttribute('src')).toBe(card.image);
      expect(renderedImage.getAttribute('alt')).toBe(card.title);
    }
  });
});
