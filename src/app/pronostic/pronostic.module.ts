import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PronosticRoutingModule } from './pronostic-routing.module';
import { PronosticComponent } from './components/pronostic/pronostic.component';


@NgModule({
  declarations: [
    PronosticComponent
  ],
  imports: [
    CommonModule,
    PronosticRoutingModule
  ]
})
export class PronosticModule { }
