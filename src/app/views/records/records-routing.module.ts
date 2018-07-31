import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { RecordsComponent } from './records.component';

const routes: Routes = [
  {
    path: '',
    component: RecordsComponent,
    data: {
      title: 'Recordss'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule {}
