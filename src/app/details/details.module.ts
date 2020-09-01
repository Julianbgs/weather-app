import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsComponent} from './components/details/details.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DetailsModule { }
