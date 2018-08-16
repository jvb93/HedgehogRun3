import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { RecordsComponent } from './records.component';
import { RecordsRoutingModule } from './records-routing.module';
import { CommonModule } from '@angular/common';
import { MilesPipe } from '../../../pipes/miles.pipe';
import { RoundPipe } from '../../../pipes/round.pipe';
import { MphPipe } from '../../../pipes/mph.pipe';
import { DateParse } from '../../../pipes/dateparse.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecordsRoutingModule,
  ],
  declarations: [ 
    RecordsComponent,
    MilesPipe, 
    RoundPipe, 
    MphPipe, 
    DateParse]
})
export class RecordsModule { }
