import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DomainPageComponent } from './domain-page.component';
import { DomainsService } from '../services/domain/domains.service';
import { QuizService } from '../services/quizService/quiz.service';
import { TesteFavoriteService } from '../services/teste-favorite/teste-favorite.service';
import { StorageService } from '../services/storage/storage.service';
import { LeaderboardService } from '../services/leaderboardService/leaderboard.service';
import { UserService } from '../services/user/user.service';
import { Leaderboard } from '../models/leaderboard';
import { Domain } from '../models/domain';
import { Quiz } from '../models/quiz';
import { User } from '../models/user';

describe('DomainPageComponent', () => {
  let component: DomainPageComponent;
  let fixture: ComponentFixture<DomainPageComponent>;
  let mockActivatedRoute: any;
  let mockDomainsService: jasmine.SpyObj<DomainsService>;
  let mockQuizService: jasmine.SpyObj<QuizService>;
  let mockTesteFavoriteService: jasmine.SpyObj<TesteFavoriteService>;
  let mockStorageService: jasmine.SpyObj<StorageService>;
  let mockLeaderboardService: jasmine.SpyObj<LeaderboardService>;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    mockActivatedRoute = {
      params: of({ domain: 'exampleDomain' }),
    };

    mockDomainsService = jasmine.createSpyObj('DomainsService', ['getDomainByName']);
    mockQuizService = jasmine.createSpyObj('QuizService', ['getQuizzesByDomain']);
    mockTesteFavoriteService = jasmine.createSpyObj('TesteFavoriteService', [
      'getTesteFavorite',
      'removeTestFromFavorites',
      'addTestToFavorites',
      'testAdaugatListener',
      'testStersListener',
    ]);
    mockStorageService = jasmine.createSpyObj('StorageService', [
      'getUser',
      'isLoggedIn',
      'getUserRole',
      'logout',
      'saveUser',
      'clean',
      'getIsLoggedInSubject',
    ]);
    mockLeaderboardService = jasmine.createSpyObj('LeaderboardService', ['getLeaderboard']);
    mockUserService = jasmine.createSpyObj('UserService', ['getUserDetailsByIds']);

    TestBed.configureTestingModule({
      declarations: [DomainPageComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: DomainsService, useValue: mockDomainsService },
        { provide: QuizService, useValue: mockQuizService },
        { provide: TesteFavoriteService, useValue: mockTesteFavoriteService },
        { provide: StorageService, useValue: mockStorageService },
        { provide: LeaderboardService, useValue: mockLeaderboardService },
        { provide: UserService, useValue: mockUserService },
      ],
    });

    fixture = TestBed.createComponent(DomainPageComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load content on ngOnInit', () => {
    const mockDomain: Domain = { id_domain: 1, domain_name: 'exampleDomain', icon_path: 'path' };
    const mockQuizzes: Quiz[] = [{ id_quiz: 1, id_domain: 1, title: 'Quiz 1', description: 'Description', creation_date: new Date(), time: 10, questions: [] }];
    const mockLeaderboard: Leaderboard[] = [
      { id_leaderboard: 1, id_user: 1, id_domain: 1, id_quiz: 1, score: 100, time: 60 },
    ];

    mockDomainsService.getDomainByName.and.returnValue(of(mockDomain));
    mockQuizService.getQuizzesByDomain.and.returnValue(of(mockQuizzes));
    mockLeaderboardService.getLeaderboard.and.returnValue(of(mockLeaderboard));
    mockUserService.getUserDetailsByIds.and.returnValue(of([{ id_user: 1, firstname: 'John', lastname: 'Doe', email: 'john@example.com' }]));

    component.ngOnInit();

    expect(mockDomainsService.getDomainByName).toHaveBeenCalledWith('exampleDomain');
    expect(mockQuizService.getQuizzesByDomain).toHaveBeenCalledWith(mockDomain.id_domain);
    expect(mockLeaderboardService.getLeaderboard).toHaveBeenCalled();
    expect(mockUserService.getUserDetailsByIds).toHaveBeenCalledWith([1]);
    expect(component.domain).toEqual(mockDomain);
    expect(component.quizzes).toEqual(mockQuizzes);
    expect(component.leaderboardUsers).toEqual([{ name: 'John Doe', score: 100, time: 60 }]);
    expect(component.averageScore).toEqual(100);
  });

  it('should update favorite quizzes on ngOnInit', () => {
    const mockTesteFavorite = [{ id_quiz: 1 }, { id_quiz: 2 }];

    mockTesteFavoriteService.getTesteFavorite.and.returnValue(of(mockTesteFavorite));

    component.ngOnInit();

    expect(mockTesteFavoriteService.getTesteFavorite).toHaveBeenCalledWith(component.id_user);
    expect(component.favoriteQuizIds).toEqual(new Set([1, 2]));
  });

  it('should toggle favorite quiz correctly', () => {
    const mockQuiz = { id_quiz: 1 };

    component.favoriteQuizIds = new Set([1]);

    component.toggleFavorite(mockQuiz);

    expect(mockTesteFavoriteService.removeTestFromFavorites).toHaveBeenCalledWith(1);
    expect(component.favoriteQuizIds).toEqual(new Set());
  });

  it('should toggle favorite quiz correctly when not currently favorite', () => {
    const mockQuiz = { id_quiz: 2 };

    component.favoriteQuizIds = new Set([1]);

    component.toggleFavorite(mockQuiz);

    expect(mockTesteFavoriteService.addTestToFavorites).toHaveBeenCalledWith(2, component.id_user);
    expect(component.favoriteQuizIds).toEqual(new Set([1, 2]));
  });

  it('should remove test from favorites', () => {
    const mockTest = { id_quiz: 1 };

    mockTesteFavoriteService.removeTestFromFavorites.and.returnValue(of(mockTest));

    component.removeTestFromFavorites(1);

    expect(mockTesteFavoriteService.removeTestFromFavorites).toHaveBeenCalledWith(1);
  });

  it('should add test to favorites', () => {
    const mockTest = { id_quiz: 2 };

    mockTesteFavoriteService.addTestToFavorites.and.returnValue(of(mockTest));

    component.addTestToFavorites(2);

    expect(mockTesteFavoriteService.addTestToFavorites).toHaveBeenCalledWith(2, component.id_user);
  });

});
