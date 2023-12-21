import { Injectable } from '@angular/core';
import { DomainCards } from '../../all-domains/model/domain-card';

@Injectable({
  providedIn: 'root',
})
export class CardsDomainService {
  constructor() {}

  cards: DomainCards = [
    {
      image: '../../assets/images/astro.png',
      title: 'Astrologie',
    },
    {
      image: '../../assets/images/bio.png',
      title: 'Biologie',
    },
    {
      image: '../../assets/images/earth.png',
      title: 'Științe ale naturii',
    },
    {
      image: '../../assets/images/economy.png',
      title: 'Economie',
    },
    {
      image: '../../assets/images/geo.png',
      title: 'Geografie',
    },
    {
      image: '../../assets/images/info.png',
      title: 'Informatică',
    },
    {
      image: '../../assets/images/math1.png',
      title: 'Matematică',
    },
    {
      image: '../../assets/images/phisics1.png',
      title: 'Fizică',
    },
    {
      image: '../../assets/images/history1.png',
      title: 'Istorie',
    },
  ];
  getCards(): DomainCards {
    return this.cards;
  }
}
