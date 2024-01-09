import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EmailService } from './email.service';

describe('EmailService', () => {
  let service: EmailService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmailService],
    });

    service = TestBed.inject(EmailService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send registration email successfully', () => {
    const emailDetails = {};

    service.sendRegistrationEmail(emailDetails).subscribe(
      (response) => {
        expect(response).toBeTruthy();
      },
      (error) => {
        fail('Should not have errored');
      }
    );

    const req = httpTestingController.expectOne(
      'http://localhost:8090/sendMailWithAttachment'
    );
    expect(req.request.method).toEqual('POST');

    req.flush({});
  });
});
