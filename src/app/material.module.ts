import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule
  ]
})
@NgModule({
  exports: [
    MatExpansionModule,
  ]
})
export class MaterialModule { }
