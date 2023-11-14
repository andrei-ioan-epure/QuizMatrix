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
  ];

  currentSlideIndex = 0;
  ngOnInit(): void {}

  getSlide() {
    return this.carouselSlides[this.currentSlideIndex];
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }

  goToPreviousSlide() {
    this.currentSlideIndex =
      this.currentSlideIndex === 0 ? 0 : this.currentSlideIndex - 1;
  }

  goToNextSlide() {
    if (this.currentSlideIndex === this.carouselSlides.length - 1) {
      this.currentSlideIndex = 0;
    } else {
      this.currentSlideIndex = this.currentSlideIndex + 1;
    }
  }

  isActiveSlide(index: number): boolean {
    return this.currentSlideIndex === index;
  }
}
