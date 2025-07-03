import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, UserProfileRoutingModule
  ],
  declarations: [UserProfileComponent]
})
export class UserProfileModule { }
