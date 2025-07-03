import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from '@app/shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

const imports = [CommonModule, SharedModule, AboutRoutingModule]

@NgModule({
  imports: [...imports ],
  declarations: [AboutComponent]
})
export class AboutModule { }
