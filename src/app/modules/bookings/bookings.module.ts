import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule, 
    BookingsRoutingModule
  ],
  declarations: [BookingsComponent]
})
export class BookingsModule { }
