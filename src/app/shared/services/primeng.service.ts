import { Injectable } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { ThemeService } from './theme.service';

@Injectable({
  providedIn: 'root'
})
export class PrimeNGService {
  
  constructor(
    private primeng: PrimeNG,
    private themeService: ThemeService
  ) {
    // Subscribe to theme changes and update PrimeNG accordingly
    this.themeService.currentTheme$.subscribe((theme: string) => {
      this.updatePrimeNGTheme(theme);
    });
  }

  /**
   * Initialize PrimeNG with default settings
   */
  initialize(): void {
    // Enable ripple effect
    this.primeng.ripple.set(true);
    
    // Set basic translations
    this.primeng.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',
      choose: 'Choose',
      upload: 'Upload',
      cancel: 'Cancel',
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      chooseYear: 'Choose Year',
      chooseMonth: 'Choose Month',
      chooseDate: 'Choose Date',
      prevDecade: 'Previous Decade',
      nextDecade: 'Next Decade',
      prevYear: 'Previous Year',
      nextYear: 'Next Year',
      prevMonth: 'Previous Month',
      nextMonth: 'Next Month',
      prevHour: 'Previous Hour',
      nextHour: 'Next Hour',
      prevMinute: 'Previous Minute',
      nextMinute: 'Next Minute',
      prevSecond: 'Previous Second',
      nextSecond: 'Next Second',
      am: 'AM',
      pm: 'PM',
      today: 'Today',
      weekHeader: 'Wk',
      firstDayOfWeek: 0,
      dateFormat: 'mm/dd/yy',
      weak: 'Weak',
      medium: 'Medium',
      strong: 'Strong',
      passwordPrompt: 'Enter a password',
      emptyFilterMessage: 'No results found',
      searchMessage: '{0} results are available',
      selectionMessage: '{0} items selected',
      emptySelectionMessage: 'No selected item',
      emptySearchMessage: 'No results found',
      emptyMessage: 'No available options'
    });

    // Apply current theme
    this.updatePrimeNGTheme(this.themeService.getCurrentTheme());
  }

  /**
   * Update PrimeNG theme based on current theme
   */
  private updatePrimeNGTheme(theme: string): void {
    // You can customize PrimeNG behavior based on theme
    if (theme === 'dark') {
      // Dark theme specific configurations
      this.primeng.inputVariant.set('outlined');
    } else {
      // Light theme specific configurations
      this.primeng.inputVariant.set('outlined');
    }
  }

  /**
   * Enable/disable ripple effect
   */
  setRipple(enabled: boolean): void {
    this.primeng.ripple.set(enabled);
  }

  /**
   * Set input variant (outlined or filled)
   */
  setInputVariant(variant: 'outlined' | 'filled'): void {
    this.primeng.inputVariant.set(variant);
  }

  /**
   * Update translations
   */
  updateTranslations(translations: any): void {
    this.primeng.setTranslation(translations);
  }
}
