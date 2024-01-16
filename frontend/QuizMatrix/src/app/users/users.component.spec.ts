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
      { userId: 1, id_user: 101, email: 'user1@example.com' },
      { userId: 2, id_user: 102, email: 'user2@example.com' },
    ];
    spyOn(userService, 'getAllUsers').and.returnValue(of(expectedUsers));

    component.ngOnInit();
    tick();

    expect(userService.getAllUsers).toHaveBeenCalled();
    expect(component.users).toEqual(expectedUsers);
    expect(console.error).not.toHaveBeenCalled();
  }));
});
