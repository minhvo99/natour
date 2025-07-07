import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

export interface ToastMessage {
  severity: 'success' | 'info' | 'warn' | 'error';
  summary: string;
  detail?: string;
  life?: number;
  sticky?: boolean;
  closable?: boolean;
  data?: any;
}

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrl: './custom-toast.component.css',
  providers: [MessageService],
  standalone: false
})
export class CustomToastComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    // Subscribe to any global toast messages if needed
    // You can extend this to listen to a global service
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Show success toast
   */
  showSuccess(summary: string, detail?: string, life: number = 3000): void {
    this.messageService.add({
      severity: 'success',
      summary,
      detail,
      life,
      closable: true
    });
  }

  /**
   * Show info toast
   */
  showInfo(summary: string, detail?: string, life: number = 3000): void {
    this.messageService.add({
      severity: 'info',
      summary,
      detail,
      life,
      closable: true
    });
  }

  /**
   * Show warning toast
   */
  showWarning(summary: string, detail?: string, life: number = 4000): void {
    this.messageService.add({
      severity: 'warn',
      summary,
      detail,
      life,
      closable: true
    });
  }

  /**
   * Show error toast
   */
  showError(summary: string, detail?: string, life: number = 5000): void {
    this.messageService.add({
      severity: 'error',
      summary,
      detail,
      life,
      closable: true
    });
  }

  /**
   * Show custom toast with full configuration
   */
  showCustom(message: ToastMessage): void {
    this.messageService.add({
      severity: message.severity,
      summary: message.summary,
      detail: message.detail,
      life: message.life || 3000,
      sticky: message.sticky || false,
      closable: message.closable !== false,
      data: message.data
    });
  }

  /**
   * Clear all toasts
   */
  clear(): void {
    this.messageService.clear();
  }

  /**
   * Clear specific toast by key
   */
  clearByKey(key: string): void {
    this.messageService.clear(key);
  }
}
