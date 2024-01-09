import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        console.log('Loaded users:', data);
        this.users = data;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  deleteUser(userId: number): void {
    console.log('Deleting user with ID:', userId);

    if (userId) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          console.log('User deleted successfully.');
          this.loadUsers();
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    } else {
      console.error('Invalid user ID.');
    }
  }
}
