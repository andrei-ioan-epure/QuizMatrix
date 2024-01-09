import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { UserService } from '../services/user/user.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [UserService],
      imports: [HttpClientTestingModule],
    });

    spyOn(console, 'error');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on initialization', fakeAsync(() => {
    const expectedUsers = [
      { userId: 1, email: 'user1@example.com' },
      { userId: 2, email: 'user2@example.com' },
    ];
    spyOn(userService, 'getAllUsers').and.returnValue(of(expectedUsers));

    component.ngOnInit();
    tick();

    expect(userService.getAllUsers).toHaveBeenCalled();
    expect(component.users).toEqual(expectedUsers);
    expect(console.error).not.toHaveBeenCalled();
  }));

  it('should delete a user and reload the users', fakeAsync(() => {
    const userId = 1;
    const expectedUsersAfterDelete = [
      { userId: 2, email: 'user2@example.com' },
      { userId: 3, email: 'user3@example.com' },
    ];
    spyOn(userService, 'deleteUser').and.returnValue(of({}));
    spyOn(userService, 'getAllUsers').and.returnValue(
      of(expectedUsersAfterDelete)
    );
    spyOn(component, 'loadUsers').and.callThrough();

    component.users = [
      { userId: 1, email: 'user1@example.com' },
      { userId: 2, email: 'user2@example.com' },
      { userId: 3, email: 'user3@example.com' },
    ];

    component.deleteUser(userId);
    tick();

    expect(userService.deleteUser).toHaveBeenCalledWith(userId);
    expect(component.loadUsers).toHaveBeenCalled();
    expect(component.users).toEqual(expectedUsersAfterDelete);
    expect(console.error).not.toHaveBeenCalled();
  }));
});
