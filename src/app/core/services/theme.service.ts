import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export interface Theme {
  name: string;
  displayName: string;
  properties: {
    // Elements
    background: string;
    headline: string;
    paragraph: string;
    button: string;
    buttonText: string;
    // Illustration
    stroke: string;
    main: string;
    highlight: string;
    secondary: string;
    tertiary: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'natours-theme';
  private currentThemeSubject = new BehaviorSubject<string>('light');
  
  currentTheme$ = this.currentThemeSubject.asObservable();

  readonly themes: Record<string, Theme> = {
    light: {
      name: 'light',
      displayName: 'Light Theme',
      properties: {
        background: '#fffffe',
        headline: '#272343',
        paragraph: '#2d334a',
        button: '#ffd803',
        buttonText: '#272343',
        stroke: '#272343',
        main: '#fffffe',
        highlight: '#ffd803',
        secondary: '#e3f6f5',
        tertiary: '#bae8e8'
      }
    },
    dark: {
      name: 'dark',
      displayName: 'Dark Theme',
      properties: {
        background: '#16161a',
        headline: '#fffffe',
        paragraph: '#94a1b2',
        button: '#7f5af0',
        buttonText: '#fffffe',
        stroke: '#010101',
        main: '#fffffe',
        highlight: '#7f5af0',
        secondary: '#72757e',
        tertiary: '#2cb67d'
      }
    }
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadTheme();
  }

  /**
   * Check if we're running in browser
   */
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  /**
   * Load theme from localStorage or use default
   */
  private loadTheme(): void {
    if (!this.isBrowser()) {
      // Set default theme for SSR
      this.setTheme('light', false);
      return;
    }

    const savedTheme = localStorage.getItem(this.THEME_KEY);
    const themeToLoad = savedTheme && this.themes[savedTheme] ? savedTheme : 'light';
    this.setTheme(themeToLoad, false);
  }

  /**
   * Set theme and apply CSS custom properties
   */
  setTheme(themeName: string, saveToStorage: boolean = true): void {
    const theme = this.themes[themeName];
    if (!theme) {
      console.warn(`Theme "${themeName}" not found`);
      return;
    }

    if (this.isBrowser()) {
      // Apply CSS custom properties to document root
      const root = document.documentElement;
      Object.entries(theme.properties).forEach(([key, value]) => {
        root.style.setProperty(`--color-${this.kebabCase(key)}`, value);
      });

      // Add theme class to body for additional styling
      document.body.className = document.body.className.replace(/theme-\w+/g, '');
      document.body.classList.add(`theme-${themeName}`);

      // Save to localStorage
      if (saveToStorage) {
        localStorage.setItem(this.THEME_KEY, themeName);
      }
    }

    // Update current theme
    this.currentThemeSubject.next(themeName);
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const currentTheme = this.currentThemeSubject.value;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Get current theme name
   */
  getCurrentTheme(): string {
    return this.currentThemeSubject.value;
  }

  /**
   * Get current theme object
   */
  getCurrentThemeObject(): Theme {
    return this.themes[this.getCurrentTheme()];
  }

  /**
   * Get all available themes
   */
  getAllThemes(): Theme[] {
    return Object.values(this.themes);
  }

  /**
   * Convert camelCase to kebab-case
   */
  private kebabCase(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}
