import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teste-parcurse',
  templateUrl: './teste-parcurse.component.html',
  styleUrl: './teste-parcurse.component.css',
})
export class TesteParcurseComponent {
  constructor(private location: Location) {}

  teste = [
    {
      nume: 'Test 1',
      scor: 85,
      durata: '00:10:15',
      domeniu: 'Biologie',
      icon: '../../assets/images/biology.png',
    },
    {
      nume: 'Test 2',
      scor: 92,
      durata: '00:7:20',
      domeniu: 'Matematică',
      icon: '../../assets/images/math.png',
    },
    {
      nume: 'Test 3',
      scor: 78,
      durata: '00:15:10',
      domeniu: 'Informatică',
      icon: '../../assets/images/informatics.png',
    },
    {
      nume: 'Test 4',
      scor: 78,
      durata: '00:15:10',
      domeniu: 'Geografie',
      icon: '../../assets/images/geography.png',
    },
  ];
  goBack(): void {
    this.location.back();
  }
}
