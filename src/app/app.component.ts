import { Component, OnInit, inject } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { PrimeNGService } from './shared/services/primeng.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);
  private primeNGService = inject(PrimeNGService);

  ngOnInit(): void {
    // Initialize PrimeNG with our custom configuration
    this.primeNGService.initialize();
  }
}
