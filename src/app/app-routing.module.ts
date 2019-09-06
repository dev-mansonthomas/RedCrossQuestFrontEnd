import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueteursComponent } from './queteurs/queteurs.component';
import { DepartComponent } from './tronc-queteur/depart/depart.component';


const routes: Routes = [
  { path: 'queteurs', component: QueteursComponent },
  { path: 'tronc-queteur/depart', component: DepartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }