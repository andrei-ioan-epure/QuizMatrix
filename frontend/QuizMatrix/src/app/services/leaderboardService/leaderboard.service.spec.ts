import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LeaderboardService } from './leaderboard.service';
import { Leaderboard } from '../../models/leaderboard';

describe('LeaderboardService', () => {
  let service: LeaderboardService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LeaderboardService],
    });

    service = TestBed.inject(LeaderboardService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    // Arrange & Act
    expect(service).toBeTruthy();
  });

  it('should retrieve leaderboards from the API', () => {
    // Arrange
    const mockLeaderboards: Leaderboard[] = [
      {
        id_leaderboard: 1,
        id_user: 1,
        id_domain: 1,
        id_quiz: 1,
        score: 100,
        time: 30,
      },
      {
        id_leaderboard: 2,
        id_user: 2,
        id_domain: 1,
        id_quiz: 2,
        score: 90,
        time: 25,
      },
    ];

    // Act
    service.getLeaderboard().subscribe((leaderboards) => {
      // Assert
      expect(leaderboards).toEqual(mockLeaderboards);
    });

    // Assert
    const req = httpTestingController.expectOne(service.getApiUrl());
    expect(req.request.method).toBe('GET');
    req.flush(mockLeaderboards);
  });

  it('should search leaderboard by IDs', () => {
    // Arrange
    const mockLeaderboard: Leaderboard = {
      id_leaderboard: 1,
      id_user: 1,
      id_domain: 1,
      id_quiz: 1,
      score: 100,
      time: 30,
    };

    // Act
    service.getByIdsLeaderboard(1, 1, 1).subscribe((result) => {
      // Assert
      expect(result).toEqual(mockLeaderboard);
    });

    // Assert
    const req = httpTestingController.expectOne(
      `${service.getApiUrl()}/search?id_user=1&id_domain=1&id_quiz=1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockLeaderboard);
  });

  it('should search leaderboard by domain and quiz IDs', () => {
    // Arrange
    const mockLeaderboards: Leaderboard[] = [
      {
        id_leaderboard: 1,
        id_user: 1,
        id_domain: 1,
        id_quiz: 1,
        score: 100,
        time: 30,
      },
      {
        id_leaderboard: 2,
        id_user: 2,
        id_domain: 1,
        id_quiz: 1,
        score: 90,
        time: 25,
      },
    ];

    // Act
    service
      .getByDomainIdAndQuizIdLeaderboard(1, 1)
      .subscribe((leaderboards) => {
        // Assert
        expect(leaderboards).toEqual(mockLeaderboards);
      });

    // Assert
    const req = httpTestingController.expectOne(
      `${service.getApiUrl()}/domainQuiz?id_domain=1&id_quiz=1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockLeaderboards);
  });

  it('should add a new leaderboard to the API', () => {
    // Arrange
    const newLeaderboard: Leaderboard = {
      id_leaderboard: 3,
      id_user: 3,
      id_domain: 2,
      id_quiz: 2,
      score: 95,
      time: 28,
    };

    // Act
    service.addLeaderboard(newLeaderboard).subscribe((addedLeaderboard) => {
      // Assert
      expect(addedLeaderboard).toEqual(newLeaderboard);
    });

    // Assert
    const req = httpTestingController.expectOne(service.getApiUrl());
    expect(req.request.method).toBe('POST');
    req.flush(newLeaderboard);
  });

  it('should update a leaderboard in the API', () => {
    // Arrange
    const updatedLeaderboard: Leaderboard = {
      id_leaderboard: 1,
      id_user: 1,
      id_domain: 1,
      id_quiz: 1,
      score: 98,
      time: 27,
    };

    // Act
    service
      .updateLeaderboard(updatedLeaderboard.id_leaderboard, updatedLeaderboard)
      .subscribe((result) => {
        // Assert
        expect(result).toEqual(updatedLeaderboard);
      });

    // Assert
    const req = httpTestingController.expectOne(
      `${service.getApiUrl()}/${updatedLeaderboard.id_leaderboard}`
    );
    expect(req.request.method).toBe('PUT');
    req.flush(updatedLeaderboard);
  });
});
