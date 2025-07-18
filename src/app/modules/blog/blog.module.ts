import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule, 
    BlogRoutingModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
