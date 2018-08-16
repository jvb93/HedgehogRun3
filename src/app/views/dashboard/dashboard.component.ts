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
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  hoglogs : Observable<IHogLog[]>
  latest: IHogLog
  fastest: IHogLog

  ngOnInit(): void {
    // generate random values for mainChart
   
  }



  constructor(db: AngularFirestore){
    this.hoglogs = db.collection<IHogLog>(config.hoglog_endpoint, q=>q.where("timestamp", '>', moment.utc().subtract(12, 'hours').toDate()).orderBy('timestamp','desc')).valueChanges();

    this.hoglogs.take(1).subscribe(log => {
      this.latest = log[0]
      console.log(log[0])
    })

    db.collection<IHogLog>(config.hoglog_endpoint, q=> q.where('ticks', '>', -1).orderBy('ticks', 'desc')).valueChanges().take(1).subscribe(log=> this.fastest = log[0]);

  
  }

}
