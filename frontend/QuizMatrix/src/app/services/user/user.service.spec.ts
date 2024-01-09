import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { StorageService } from '../storage/storage.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService, StorageService],
    });

    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request to fetch all users', () => {
    const expectedUsers = [
      { id: 1, name: 'User1' },
      { id: 2, name: 'User2' },
    ];
    const testUrl = 'http://localhost:8090/api/auth/users';

    service.getAllUsers().subscribe((users) => {
      expect(users).toEqual(expectedUsers);
    });

    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedUsers);
  });

  it('should make a DELETE request to delete a user', () => {
    const userId = 1;
    const testUrl = `http://localhost:8090/api/auth/users/${userId}`;

    service.deleteUser(userId).subscribe();

    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toEqual('DELETE');
  });
});
