import { TestBed } from '@angular/core/testing';

import { TesteFavoriteService } from './teste-favorite.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';


describe('TesteFavoriteService', () => {
  let service: TesteFavoriteService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TesteFavoriteService]
    });

    service = TestBed.inject(TesteFavoriteService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); 
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request to obtain favorite tests', () => {
    const id_user = 1;
    const testUrl = 'http://localhost:8090/quiz_user/getByIdUser?id_user=' + id_user;
  
    service.getTesteFavorite(id_user).subscribe();
  
    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toEqual('GET');
  });

  it('should make a DELETE request to eliminate tests from favorite', () => {
    const id_quiz = 2;
    const testUrl = 'http://localhost:8090/quiz_user/delete?id_quiz=' + id_quiz;
  
    service.removeTestFromFavorites(id_quiz).subscribe();
  
    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toEqual('DELETE');
  });

  it('should make a POST request to add a test to favorites', () => {
    const id_quiz = 3;
    const id_user = 1;
    const testUrl = 'http://localhost:8090/quiz_user';
  
    service.addTestToFavorites(id_quiz, id_user).subscribe();
  
    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({ id_quiz: id_quiz, id_user: id_user });
  });
  
  

});
