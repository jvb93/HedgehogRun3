import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RecordsComponent} from './records/records.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'records', component: RecordsComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
