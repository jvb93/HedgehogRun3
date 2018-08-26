import { Component, OnInit } from '@angular/core';
import { IHogLog } from '../../models/IHogLog';
import { AngularFirestore } from 'angularfire2/firestore';
import { config } from '../../app.config'
import 'rxjs/add/operator/take';
import * as Highcharts from 'highcharts';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  latest: IHogLog
  fastest: IHogLog
  pastTwelveHours: Array<IHogLog>

  Highcharts = Highcharts;
  updateTemperatureChartFlag = false
  updateHumidityChartFlag = false
  temperatureChartOptions = {
    series: [{
      data: []
    }]
  };
  humidityChartOptions = {
    series: [{
      data: []
    }]
  };

  ngOnInit(): void {
   
  }

  constructor(db: AngularFirestore){
  
    db.collection<IHogLog>(config.hoglog_endpoint, q=> q.orderBy('timestamp', 'desc').limit(1)).valueChanges().subscribe(log=> this.latest = log[0]);
    db.collection<IHogLog>(config.hoglog_endpoint, q=> q.orderBy('ticks', 'desc').limit(1)).valueChanges().subscribe(log=> this.fastest = log[0]);
    db.collection<IHogLog>(config.hoglog_endpoint, q=> q.where('timestamp', '>=', Date.now() - 43200000 )).valueChanges().subscribe(log => {
      this.pastTwelveHours = log
      this.temperatureChartOptions.series[0].data = log.map(l => l.temperature_f);
      this.updateTemperatureChartFlag = true;
      this.humidityChartOptions.series[0].data = log.map(l => l.humidity);
      this.updateHumidityChartFlag = true;
    });



    
  }

}
