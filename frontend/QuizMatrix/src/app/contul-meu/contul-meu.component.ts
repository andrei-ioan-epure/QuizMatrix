import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-contul-meu',
  templateUrl: './contul-meu.component.html',
  styleUrl: './contul-meu.component.css',
})
export class ContulMeuComponent implements OnInit {
  domenii: string[] = ['Domeniu1', 'Domeniu2', 'Domeniu3'];
  domeniuSelectat: string | undefined;
  utilizator = {
    username: 'username',
    firstname: 'Prenume',
    lastname: 'Nume',
    email: 'email@example.com',
    rank: 'Rank Prestabilit',
  };
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.utilizator = this.storageService.getUser();
  }
}
