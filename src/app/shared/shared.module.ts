import { NgModule } from '@angular/core';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class SharedModule { }
