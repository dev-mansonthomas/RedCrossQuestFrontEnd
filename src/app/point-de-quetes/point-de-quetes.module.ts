import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointDeQuetesComponent } from './point-de-quetes/point-de-quetes.component';
import { PointDeQueteComponent } from './point-de-quete/point-de-quete.component';
import { PointDeQueteSearchComponent } from './point-de-quete-search/point-de-quete-search.component';



@NgModule({
  declarations: [PointDeQuetesComponent, PointDeQueteComponent, PointDeQueteSearchComponent],
  imports: [
    CommonModule
  ]
})
export class PointDeQuetesModule { }
