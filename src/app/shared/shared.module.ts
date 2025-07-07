import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Shared Components
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { CustomToastComponent } from './components/custom-toast/custom-toast.component';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { RatingModule } from 'primeng/rating';

const imports = [
  CommonModule, 
  FormsModule, 
  ReactiveFormsModule,
  // PrimeNG Modules
  ButtonModule,
  InputTextModule,
  DatePickerModule,
  CardModule,
  ToastModule,
  MessageModule,
  RatingModule
];

const declarations = [
  HeaderComponent, 
  FooterComponent, 
  SidebarComponent, 
  LoginComponent, 
  SignupComponent, 
  ForgotPasswordComponent, 
  TourCardComponent, 
  ThemeToggleComponent,
  CustomToastComponent
];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...imports, ...declarations],
})
export class SharedModule {}