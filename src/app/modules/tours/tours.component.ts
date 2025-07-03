import { Component, OnInit } from '@angular/core';
import { Tour } from '../../shared/models/tour.models';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css'],
  standalone: false
})
export class ToursComponent implements OnInit {
  tours: Tour[] = [];

  constructor() { }

  ngOnInit() {
    this.loadSampleTours();
  }

  /**
   * Load sample tours for demo
   */
  private loadSampleTours(): void {
    this.tours = [
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
      },
      {
        _id: '4',
        name: 'The City Wanderer',
        destination: 'Tokyo, Japan',
        duration: 4,
        maxGroupSize: 20,
        difficulty: 'easy',
        price: 297,
        description: 'Immerse yourself in the vibrant culture of Tokyo. From ancient temples to modern skyscrapers, experience the best of Japan.',
        image: '/assets/images/placeholder.svg',
        ratingsAverage: 4.6,
        ratingsQuantity: 42
      },
      {
        _id: '5',
        name: 'The Park Camper',
        destination: 'Yellowstone, USA',
        duration: 6,
        maxGroupSize: 18,
        difficulty: 'medium',
        price: 447,
        description: 'Camp under the stars in one of America\'s most iconic national parks. Wildlife watching, hiking, and natural wonders await.',
        image: '/assets/images/placeholder.svg',
        ratingsAverage: 4.5,
        ratingsQuantity: 31
      },
      {
        _id: '6',
        name: 'The Sports Lover',
        destination: 'Patagonia, Chile',
        duration: 8,
        maxGroupSize: 10,
        difficulty: 'difficult',
        price: 697,
        description: 'Push your limits with extreme sports in the wild landscapes of Patagonia. Rock climbing, kayaking, and glacier trekking included.',
        image: '/assets/images/placeholder.svg',
        ratingsAverage: 4.9,
        ratingsQuantity: 28
      }
    ];
  }

  /**
   * Handle tour booking
   */
  onBookTour(tour: Tour): void {
    console.log('Booking tour:', tour);
    // TODO: Implement booking logic
    alert(`Booking ${tour.name} - $${tour.price}. This feature will be implemented soon!`);
  }
}
