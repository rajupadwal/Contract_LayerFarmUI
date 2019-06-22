import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { CustomerInfoComponent } from './customer-info.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerInfoComponent,
    data: {
      title: 'Customer Info'
    }
  },
//   {
//     path: 'adddailyprogressreport',
//     component: AddDailyProgressReportComponent,
//     data: {
//       title: 'add Progress report'
//     }
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CusotomerInfoRoutingModule { }
