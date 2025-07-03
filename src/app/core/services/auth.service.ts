import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import {
  SignupRequest,
  LoginRequest,
  VerifyOtpRequest,
  RefreshTokenRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  AuthResponse,
  User,
  TokenResponse,
  StorageKeys,
  AuthEndpoints
} from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  
  // Base API URL từ environment
  private readonly API_BASE_URL = environment.apiUrl;

  // BehaviorSubject để track authentication status
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Load user from storage on service initialization
    this.loadUserFromStorage();
  }

  /**
   * Load user data from localStorage if running in browser
   */
  private loadUserFromStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      const userData = localStorage.getItem(StorageKeys.USER_DATA);
      if (userData) {
        try {
          const user = JSON.parse(userData);
          this.currentUserSubject.next(user);
        } catch (error) {
          console.error('Error parsing user data from storage:', error);
          localStorage.removeItem(StorageKeys.USER_DATA);
        }
      }
    }
  }

  /**
   * Get current user
   */
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(StorageKeys.ACCESS_TOKEN);
      return !!token;
    }
    return false;
  }

  /**
   * Handle error responses
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    
    if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return throwError(() => new Error(errorMessage));
  }

  /**
   * Logout user
   */
  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Clear all stored data
      localStorage.removeItem(StorageKeys.ACCESS_TOKEN);
      localStorage.removeItem(StorageKeys.REFRESH_TOKEN);
      localStorage.removeItem(StorageKeys.USER_DATA);
    }
    
    // Clear current user
    this.currentUserSubject.next(null);
    
    // Navigate to login page
    this.router.navigate(['/login']);
  }
}
