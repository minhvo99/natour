import { Component, OnInit } from '@angular/core';
import { Tour } from '../../shared/models/tour.models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  featuredTours: Tour[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadFeaturedTours();
  }

  /**
   * Load featured tours for homepage
   */
  private loadFeaturedTours(): void {
    // Load top 3 featured tours
    this.featuredTours = [
      {
        _id: '1',
        name: 'The Forest Hiker',
        destination: 'Amazon Rainforest, Brazil',
        duration: 5,
        maxGroupSize: 25,
        difficulty: 'easy',
        price: 397,
        description: 'Explore the breathtaking Amazon rainforest with experienced guides. Discover exotic wildlife, pristine rivers, and indigenous cultures in this unforgettable adventure.',
        image: '/assets/images/placeholder.svg',
        ratingsAverage: 4.7,
        ratingsQuantity: 37
      },
      {
        _id: '2',
        name: 'The Sea Explorer',
        destination: 'Maldives',
        duration: 7,
        maxGroupSize: 15,
        difficulty: 'medium',
        price: 497,
        description: 'Dive into crystal-clear waters and explore vibrant coral reefs. Enjoy luxury accommodations and world-class diving experiences in paradise.',
        image: '/assets/images/placeholder.svg',
        ratingsAverage: 4.9,
        ratingsQuantity: 54
      },
      {
        _id: '3',
        name: 'The Snow Adventurer',
        destination: 'Himalayas, Nepal',
        duration: 10,
        maxGroupSize: 12,
        difficulty: 'difficult',
        price: 897,
        description: 'Challenge yourself with an epic trek through the stunning Himalayas. Experience breathtaking mountain views and rich Sherpa culture.',
        image: '/assets/images/placeholder.svg',
        ratingsAverage: 4.8,
        ratingsQuantity: 23
      }
    ];
  }

  /**
   * Handle tour booking from featured tours
   */
  onBookTour(tour: Tour): void {
    console.log('Booking featured tour:', tour);
    // Navigate to tours page or booking page
    this.router.navigate(['/tours'], { queryParams: { selected: tour._id } });
  }
}
