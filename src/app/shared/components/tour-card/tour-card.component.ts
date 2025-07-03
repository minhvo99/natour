import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tour } from '../../models/tour.models';

@Component({
  selector: 'app-tour-card',
  standalone: false,
  templateUrl: './tour-card.component.html',
  styleUrl: './tour-card.component.css'
})
export class TourCardComponent {
  @Input() tour!: Tour;
  @Input() loading: boolean = false;
  @Output() bookTour = new EventEmitter<Tour>();

  /**
   * Generate array for filled stars
   */
  getStarArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    return Array(fullStars).fill(0);
  }

  /**
   * Generate array for empty stars
   */
  getEmptyStarArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return Array(emptyStars).fill(0);
  }

  /**
   * Handle book now button click
   */
  onBookNow(): void {
    if (this.loading) return;
    this.bookTour.emit(this.tour);
  }

  /**
   * Handle image load error
   */
  onImageError(event: any): void {
    event.target.src = '/assets/images/placeholder.svg';
  }

  /**
   * Format price with currency
   */
  getFormattedPrice(): string {
    return `$${this.tour.price.toLocaleString()}`;
  }
}
