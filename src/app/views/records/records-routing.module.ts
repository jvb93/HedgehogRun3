import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { RecordsComponent } from './records.component';

const routes: Routes = [
  {
    path: '',
    component: RecordsComponent,
    data: {
      title: 'Records'
    }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule {}
