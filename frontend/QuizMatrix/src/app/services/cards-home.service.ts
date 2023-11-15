import { Injectable } from '@angular/core';
import { Cards } from '../home/model/card';

@Injectable({
  providedIn: 'root',
})
export class CardsHomeService {
  constructor() {}

  cards: Cards = [
    {
      image: '../../assets/images/earth.png',
      title: 'Cel mai fain test de la biologie',
      description: 'Aici poti invata biologia prin teste interactive!',
    },
    {
      image: '../../assets/images/math1.png',
      title: 'Cel mai fain test de la biologie',
      description: 'Aici poti invata biologia prin teste interactive!',
    },
    {
      image: '../../assets/images/astro.png',
      title: 'Cel mai fain test de la biologie',
      description: 'Aici poti invata biologia prin teste interactive!',
    },
    {
      image: '../../assets/images/bio.png',
      title: 'Cel mai fain test de la biologie',
      description: 'Aici poti invata biologia prin teste interactive!',
    },
  ];
  getCards(): Cards {
    return this.cards;
  }
}
