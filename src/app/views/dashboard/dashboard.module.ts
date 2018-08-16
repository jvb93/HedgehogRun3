import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MilesPipe } from '../../../pipes/miles.pipe';
import { RoundPipe } from '../../../pipes/round.pipe';
import { MphPipe } from '../../../pipes/mph.pipe';
import { DateParse } from '../../../pipes/dateparse.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ 
    DashboardComponent,
    MilesPipe, 
    RoundPipe, 
    MphPipe, 
    DateParse ]
})
export class DashboardModule { }
