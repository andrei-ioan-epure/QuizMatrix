import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  carouselSlides: string[] = [
    '../../assets/images/astronomy.png',
    '../../assets/images/biology.png',
    '../../assets/images/math.png',
    '../../assets/images/geography.png',
    '../../assets/images/informatics.png',
    '../../assets/images/phisics.png',
    '../../assets/images/science.png',
    '../../assets/images/economics.png',
  ];

  currentPairIndex = 0;
  slidesPerPair = 2;
  totalPairs = Math.ceil(this.carouselSlides.length / this.slidesPerPair);

  ngOnInit(): void {}

  get visibleSlidePairs(): string[][] {
    const startIndex = this.currentPairIndex * this.slidesPerPair;
    const endIndex = startIndex + this.slidesPerPair;
    return this.carouselSlides
      .slice(startIndex, endIndex)
      .map((slide) => [slide]);
  }

  goToPreviousPair() {
    this.currentPairIndex =
      (this.currentPairIndex - 1 + this.totalPairs) % this.totalPairs;
  }

  goToNextPair() {
    this.currentPairIndex = (this.currentPairIndex + 1) % this.totalPairs;
  }

  goToPair(index: number) {
    this.currentPairIndex = index;
  }

  isActivePair(index: number): boolean {
    return this.currentPairIndex === index;
  }

  // Adăugăm o funcție care returnează numărul total de perechi pentru bule(2 imagini=o pereche=un bullet)
  getTotalPairs(): number[] {
    return new Array(this.totalPairs);
  }
}
