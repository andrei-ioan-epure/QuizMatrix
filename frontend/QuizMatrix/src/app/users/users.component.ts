import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  errorMessage: string = '';
  currentUser: any;

  constructor(
    private userService: UserService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.currentUser = this.storageService.getUser();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        console.log('Loaded users:', data);
        this.users = data;
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error loading users:', error);
        this.errorMessage = 'Eroare la încărcarea utilizatorilor.';
      }
    );
  }

  deleteUser(userId: number): void {
    console.log('Deleting user with ID:', userId);

    if (userId) {
      // Verificăm dacă utilizatorul curent încearcă să se șteargă pe el însuși
      if (userId === this.currentUser.id_user) {
        this.errorMessage = 'Nu poți șterge utilizatorul curent.';
        return;
      }

      // Verificăm dacă utilizatorul curent are drepturi de "ADMIN" pentru a permite ștergerea
      if (!this.storageService.isUserAdmin()) {
        this.errorMessage = 'Nu ai drepturi pentru a șterge utilizatori.';
        return;
      }

      this.userService.deleteUser(userId).subscribe(
        () => {
          console.log('User deleted successfully.');
          this.loadUsers();
        },
        (error) => {
          console.error('Error deleting user:', error);
          if (error === 'Cannot delete user with associated records.') {
            this.errorMessage = 'Cannot delete user with associated records.';
          } else {
            this.errorMessage = 'Nu se poate șterge un user cu istoric.';
          }
        }
      );
    } else {
      console.error('Invalid user ID.');
    }
  }
}
