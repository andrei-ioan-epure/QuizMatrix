import { TestBed } from '@angular/core/testing';

import { TesteParcurseService } from './teste-parcurse.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TesteParcurseService', () => {
  let service: TesteParcurseService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TesteParcurseService]
    });

    service = TestBed.inject(TesteParcurseService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET to obtain completed tests', () => {
    const id_user = 1;
    service.getCompletedTests(id_user).subscribe();

    const req = httpTestingController.expectOne(`${service['baseUrl']}/getByIdUser?id_user=${id_user}`);
    expect(req.request.method).toEqual('GET');
  });

  it('should make a POST request to add a test to completed tests', () => {
    const id_quiz = 3;
    const id_user = 1;
    const score = 100;

    service.addTestToCompleted(id_quiz, id_user, score).subscribe();

    const req = httpTestingController.expectOne(service['baseUrl']);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({
      id_quiz: id_quiz,
      id_user: id_user,
      score: score,
      date_completed: jasmine.any(String)
    });
  });

  it('should emit events for added tests', () => {
    const test = { id: 1, name: 'Test 1' };
    spyOn(service['testAdaugatLaParcurse'], 'next');

    service.testAdaugat(test);

    expect(service['testAdaugatLaParcurse'].next).toHaveBeenCalledWith(test);
  });

});
