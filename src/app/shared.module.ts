
import { MilesPipe } from '../pipes/miles.pipe';
import { RoundPipe } from '../pipes/round.pipe';
import { MphPipe } from '../pipes/mph.pipe';
import { DateParse } from '../pipes/dateparse.pipe';
import { NgModule } from '@angular/core';


@NgModule({

  declarations: [  
    MilesPipe,
    RoundPipe,
    MphPipe,
    DateParse
    
  ],
  exports:[
    MilesPipe,
    RoundPipe,
    MphPipe,
    DateParse
  ]

})
export class SharedModule { }
