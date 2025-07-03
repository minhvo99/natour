import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { DashboardComponent } from "./dashboard.component";
import { DashBoardRoutingModule } from "./dashboard-routing.module";

const imports = [CommonModule, SharedModule,DashBoardRoutingModule ]

@NgModule({
  imports: [...imports ],
  declarations: [DashboardComponent]
})

export class DashboardModule {}