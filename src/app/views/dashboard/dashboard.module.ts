import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    RoundProgressModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ 
    DashboardComponent,
  ]
})
export class DashboardModule { }
