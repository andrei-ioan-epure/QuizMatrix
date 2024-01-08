import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TesteFavoriteComponent } from './teste-favorite.component';
import { MatIconModule } from '@angular/material/icon';
import { StorageService } from '../services/storage/storage.service';
import { TesteFavoriteService } from '../services/teste-favorite/teste-favorite.service';
import { of } from 'rxjs';

describe('TesteFavoriteComponent', () => {
  let component: TesteFavoriteComponent;
  let fixture: ComponentFixture<TesteFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatIconModule
      ],
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

  it('should initialize favorite tests on ngOnInit', () => {
    const storageService = TestBed.inject(StorageService);
    spyOn(storageService, 'isLoggedIn').and.returnValue(true);
    spyOn(storageService, 'getUser').and.returnValue({ id_user: 1 });
    const testeFavoriteService = TestBed.inject(TesteFavoriteService);
    spyOn(testeFavoriteService, 'getTesteFavorite').and.returnValue(of([])); 
  
    component.ngOnInit();
  
    expect(storageService.isLoggedIn).toHaveBeenCalled();
    expect(storageService.getUser).toHaveBeenCalled();
    expect(testeFavoriteService.getTesteFavorite).toHaveBeenCalledWith(1);
  });

  it('should eliminate a test from favorites', () => {
    const testId = 2; 
    const testeFavoriteService = TestBed.inject(TesteFavoriteService);
    spyOn(testeFavoriteService, 'removeTestFromFavorites').and.returnValue(of({})); 
    component.teste = [{ quiz: { id_quiz: testId } }];
  
    component.removeFromFavorites(testId);
  
    expect(testeFavoriteService.removeTestFromFavorites).toHaveBeenCalledWith(testId);
    expect(component.teste.length).toBe(0);
  });

  
});
