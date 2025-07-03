// Auth Request Models
export interface SignupRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  token: string;
  password: string;
}

// Auth Response Models
export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: User;
    accessToken: string;
    refreshToken: string;
  };
}

export interface User {
  _id: string;
  fullName: string;
  email: string;
  role: 'Regular' | 'Admin' | 'Moderator';
  image?: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

// Local Storage Keys
export enum StorageKeys {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
  USER_DATA = 'user_data'
}

// API Endpoints
export enum AuthEndpoints {
  SIGNUP = '/signup',
  LOGIN = '/login',
  VERIFY_OTP = '/verify-otp',
  REFRESH_TOKEN = '/refresh-token',
  DELETE_ACCOUNT = '/delete-account',
  FORGOT_PASSWORD = '/forgot-password',
  RESET_PASSWORD = '/reset-password',
  AUTH_USER = '/auth-user'
}
