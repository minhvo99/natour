import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
