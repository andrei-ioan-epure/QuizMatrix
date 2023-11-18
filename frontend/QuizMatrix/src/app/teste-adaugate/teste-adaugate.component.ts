import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-adaugate',
  templateUrl: './teste-adaugate.component.html',
  styleUrl: './teste-adaugate.component.css'
})
export class TesteAdaugateComponent {

  teste = [
    { nume: 'Test 1', scor: 85, durata:'00:10:15', domeniu:'Biologie',icon: '../../assets/images/biology.png' },
    { nume: 'Test 2', scor: 92, durata:'00:7:20', domeniu:'Matematică',icon: '../../assets/images/math.png' },
    { nume: 'Test 3', scor: 78, durata:'00:15:10', domeniu:'Informatică',icon: '../../assets/images/it.png'  },
    { nume: 'Test 4', scor: 78, durata:'00:15:10', domeniu:'Istorie',icon: '../../assets/images/history.png'  },
  ];
}
