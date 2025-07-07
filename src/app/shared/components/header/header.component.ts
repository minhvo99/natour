import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { User } from '@core/models/auth.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: false
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  private router = inject(Router);
  private destroy$ = new Subject<void>();

  isAuthenticated = false;
  isAdmin = false;
  currentUser: User | null = null;
  isMobileMenuOpen = false;
  isUserMenuOpen = false;

  ngOnInit(): void {
    // Subscribe to authentication status
    this.authService.currentUser$
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.currentUser = user;
        this.isAuthenticated = !!user;
        this.isAdmin = user?.role === 'Admin';
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Close user menu when opening mobile menu
    if (this.isMobileMenuOpen) {
      this.isUserMenuOpen = false;
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  getUserInitials(): string {
    if (!this.currentUser?.fullName) return 'U';
    
    const names = this.currentUser.fullName.split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  }

  logout(): void {
    // Close menus first
    this.isUserMenuOpen = false;
    this.isMobileMenuOpen = false;
    
    // Perform logout
    if (this.authService.logout) {
      this.authService.logout();
    }
    
    // Navigate to home
    this.router.navigate(['/']);
  }
}
