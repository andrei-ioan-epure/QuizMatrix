import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contul-meu',
  templateUrl: './contul-meu.component.html',
  styleUrl: './contul-meu.component.css'
})
export class ContulMeuComponent implements OnInit{
  domenii: string[] = ['Domeniu1', 'Domeniu2', 'Domeniu3']; 
  domeniuSelectat: string | undefined;
  utilizator = {
    nume: 'Nume',
    prenume: 'Prenume',
    email: 'email@example.com',
    rank: 'Rank Prestabilit',
  };
  ngOnInit(): void {
  }

}
