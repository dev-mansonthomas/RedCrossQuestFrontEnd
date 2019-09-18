import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartComponent } from './tronc-queteur/depart/depart.component';


const routes: Routes = [
  { path: 'queteurs', component: DepartComponent },
  { path: 'tronc-queteur/depart', component: DepartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }