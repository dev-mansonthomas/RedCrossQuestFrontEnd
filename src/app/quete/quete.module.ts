import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { PreparationComponent } from './preparation/preparation.component';
import { DepartComponent } from './depart/depart.component';
import { RetourComponent } from './retour/retour.component';
import { ComptageComponent } from './comptage/comptage.component';



@NgModule({
  declarations: [PreparationComponent, DepartComponent, RetourComponent, ComptageComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PreparationComponent, 
    DepartComponent, 
    RetourComponent, 
    ComptageComponent
  ]
})
export class QueteModule { }

