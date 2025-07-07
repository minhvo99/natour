import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@app/shared/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
  standalone: false
})
export class ThemeToggleComponent implements OnInit {
  currentTheme: string = 'light';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  get isDark(): boolean {
    return this.currentTheme === 'dark';
  }
}
