import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { IHogLog } from '../../models/IHogLog';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { config } from '../../app.config'
import 'rxjs/add/operator/take';
import * as moment from 'moment'
import { ITest } from '../../models/ITest';
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  hoglogs : Observable<IHogLog[]>
  latest: IHogLog
  fastest: IHogLog
  test: ITest
  testObservable: Observable<ITest>

  ngOnInit(): void {
    // generate random values for mainChart
   
  }



  constructor(db: AngularFirestore){
  
    db.collection<IHogLog>(config.hoglog_endpoint, q=> q.orderBy('timestamp', 'desc').limit(1)).valueChanges().subscribe(log=> this.latest = log[0]);
    db.collection<IHogLog>(config.hoglog_endpoint, q=> q.orderBy('ticks', 'desc').limit(1)).valueChanges().subscribe(log=> this.fastest = log[0]);


    
  }

}
