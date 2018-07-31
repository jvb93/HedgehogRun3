import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { RecordsComponent } from './records.component';
import { RecordsRoutingModule } from './records-routing.module';

@NgModule({
  imports: [
    FormsModule,
    RecordsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ RecordsComponent ]
})
export class RecordsModule { }
