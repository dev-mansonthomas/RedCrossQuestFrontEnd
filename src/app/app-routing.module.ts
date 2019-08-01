import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueteursComponent } from './queteurs/queteurs.component';


const routes: Routes = [
  { path: 'queteurs', component: QueteursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }