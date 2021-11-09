import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveProviderPage } from './leave-provider.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveProviderPageRoutingModule {}
