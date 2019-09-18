import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreparationComponent } from './preparation/preparation.component';
import { DepartComponent } from './depart/depart.component';
import { RetourComponent } from './retour/retour.component';
import { ComptageComponent } from './comptage/comptage.component';



@NgModule({
  declarations: [PreparationComponent, DepartComponent, RetourComponent, ComptageComponent],
  imports: [
    CommonModule
  ]
})
export class QueteModule { }

