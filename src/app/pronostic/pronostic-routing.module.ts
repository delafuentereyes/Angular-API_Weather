import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PronosticComponent } from './components/pronostic/pronostic.component';

const routes: Routes = [
  { path: '', component: PronosticComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PronosticRoutingModule { }
