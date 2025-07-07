import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export interface GlobalToastMessage {
  severity: 'success' | 'info' | 'warn' | 'error';
  summary: string;
  detail?: string;
  life?: number;
  sticky?: boolean;
  closable?: boolean;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalToastService {
  
  constructor(private messageService: MessageService) {}

  /**
   * Show success notification
   */
  success(summary: string, detail?: string, life: number = 3000): void {
    this.messageService.add({
      severity: 'success',
      summary,
      detail,
      life,
      closable: true,
      key: 'global'
    });
  }

  /**
   * Show info notification
   */
  info(summary: string, detail?: string, life: number = 3000): void {
    this.messageService.add({
      severity: 'info',
      summary,
      detail,
      life,
      closable: true,
      key: 'global'
    });
  }

  /**
   * Show warning notification
   */
  warning(summary: string, detail?: string, life: number = 4000): void {
    this.messageService.add({
      severity: 'warn',
      summary,
      detail,
      life,
      closable: true,
      key: 'global'
    });
  }

  /**
   * Show error notification
   */
  error(summary: string, detail?: string, life: number = 5000): void {
    this.messageService.add({
      severity: 'error',
      summary,
      detail,
      life,
      closable: true,
      key: 'global'
    });
  }

  /**
   * Show custom notification with full configuration
   */
  show(message: GlobalToastMessage): void {
    this.messageService.add({
      severity: message.severity,
      summary: message.summary,
      detail: message.detail,
      life: message.life || 3000,
      sticky: message.sticky || false,
      closable: message.closable !== false,
      data: message.data,
      key: 'global'
    });
  }

  /**
   * Clear all notifications
   */
  clear(): void {
    this.messageService.clear('global');
  }

  /**
   * Show form validation error
   */
  formError(message: string = 'Please check the form for errors'): void {
    this.error('Form Validation Error', message);
  }

  /**
   * Show API error
   */
  apiError(message: string = 'An error occurred. Please try again.'): void {
    this.error('Server Error', message);
  }

  /**
   * Show save success
   */
  saveSuccess(entity: string = 'Data'): void {
    this.success('Success', `${entity} saved successfully!`);
  }

  /**
   * Show delete success
   */
  deleteSuccess(entity: string = 'Item'): void {
    this.success('Deleted', `${entity} deleted successfully!`);
  }

  /**
   * Show network error
   */
  networkError(): void {
    this.error('Network Error', 'Please check your internet connection and try again.');
  }

  /**
   * Show unauthorized error
   */
  unauthorized(): void {
    this.error('Unauthorized', 'You are not authorized to perform this action.');
  }

  /**
   * Show loading message (sticky)
   */
  loading(message: string = 'Loading...', detail?: string): void {
    this.messageService.add({
      severity: 'info',
      summary: message,
      detail,
      sticky: true,
      closable: false,
      key: 'loading'
    });
  }

  /**
   * Clear loading message
   */
  clearLoading(): void {
    this.messageService.clear('loading');
  }
}
