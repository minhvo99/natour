import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { authInterceptor } from './core/interceptors/auth.interceptor';

// PrimeNG Imports
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';
import Aura from '@primeng/themes/aura';

@NgModule({ 
  declarations: [AppComponent],
  bootstrap: [AppComponent], 
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule
  ], 
  providers: [
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([authInterceptor]),
      withFetch()
    ),
    provideHttpClient(withInterceptorsFromDi()),
    // PrimeNG Services
    MessageService,
    // PrimeNG Configuration
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.theme-dark',
          cssLayer: false
        }
      },
      ripple: true,
      inputVariant: 'outlined',
      zIndex: {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100
      }
    })
  ] 
})
export class AppModule { }
