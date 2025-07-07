import { Component, inject, OnInit, signal } from '@angular/core';
import { Tour } from '../../shared/models/tour.models';
import { TourService } from '@app/shared/services/tour.service';
import { Subject, takeUntil } from 'rxjs';
import { GlobalToastService } from '@app/shared/services/global-toast.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css'],
  standalone: false
})
export class ToursComponent implements OnInit {
  tours = signal<Tour[]>([]);
  destroy$ = new Subject<void>();
  private tourService = inject(TourService)
  private toastService = inject(GlobalToastService);

  ngOnInit() {
    this.tourService.getAllTours().pipe(takeUntil(this.destroy$)).subscribe({
      next: (tours: Tour[]) => {
        this.tours.set(tours);
      },
      error: (error) => {
        this.toastService.error('Failed to load tours', error.message);
      }
    })
  }

  /**
   * Load sample tours for demo
   */
  

  /**
   * Handle tour booking
   */
  onBookTour(tour: Tour): void {
    // TODO: Implement booking logic
    alert(`Booking ${tour.name} - $${tour.price}. This feature will be implemented soon!`);
  }
}
