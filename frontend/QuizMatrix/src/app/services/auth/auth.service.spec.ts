import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });

    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request to forgot-password endpoint', () => {
    const email = 'test@example.com';

    service.forgotPassword(email).subscribe();

    const req = httpTestingController.expectOne(
      `http://localhost:8090/api/auth/forgot-password?email=${email}`
    );

    expect(req.request.method).toBe('GET');
    req.flush({});
  });
});
