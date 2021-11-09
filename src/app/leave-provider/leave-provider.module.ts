import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveProviderPageRoutingModule } from './leave-provider-routing.module';

import { LeaveProviderPage } from './leave-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveProviderPageRoutingModule
  ],
  declarations: [LeaveProviderPage]
})
export class LeaveProviderPageModule {}
