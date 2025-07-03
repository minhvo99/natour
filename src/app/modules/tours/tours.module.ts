import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ToursRoutingModule } from './tours-routing.module';
import { ToursComponent } from './tours.component';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule, 
    ToursRoutingModule
  ],
  declarations: [ToursComponent]
})
export class ToursModule { }
