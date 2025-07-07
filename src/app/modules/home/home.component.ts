import {
  Component,
  inject,
  OnInit,
  signal,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Tour } from '../../shared/models/tour.models';
import { Router } from '@angular/router';
import { TourService } from '@app/shared/services/tour.service';
import { Subject, takeUntil } from 'rxjs';
import { GlobalToastService } from '@app/shared/services/global-toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private tourService = inject(TourService);
  private toastService = inject(GlobalToastService);
  private platformId = inject(PLATFORM_ID);

  featuredTours = signal<Tour[]>([]);
  destroy$: Subject<void> = new Subject<void>();

  ngOnInit() {
    this.getTopTour();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Load featured tours for homepage
   */
  getTopTour(): void {
  

    this.tourService
      .getTourCheap()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (tours: any[]) => {
       
          this.featuredTours.set(tours);
        },
        error: (error) => {
         
          this.toastService.error(
            'Failed to load featured tours',
            error.message
          );
        },
      });
  }

  onBookTour(tour: Tour): void {
    this.router.navigate(['/tours'], { queryParams: { selected: tour._id } });
  }
}
