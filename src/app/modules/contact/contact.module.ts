import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule, 
    ContactRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
