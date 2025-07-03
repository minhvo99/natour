import { Component, OnInit, inject } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    // Theme service will automatically load the saved theme
    // or apply the default theme
  }
}
