import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { QueteursComponent} from './queteurs/queteurs/queteurs.component';
import { QueteurComponent} from './queteurs/queteur/queteur.component';

import { PreparationComponent } from './quete/preparation/preparation.component';
import { DepartComponent } from './quete/depart/depart.component';
import { RetourComponent } from './quete/retour/retour.component';
import { ComptageComponent } from './quete/comptage/comptage.component';

import { PointDeQuetesComponent } from './point-de-quetes/point-de-quetes/point-de-quetes.component';

const routes: Routes = [
  { path: 'queteurs', component: QueteursComponent },
  { path: 'queteur', component: QueteurComponent },

  { path: 'preparation', component: PreparationComponent },
  { path: 'depart', component: DepartComponent },
  { path: 'retour', component: RetourComponent },
  { path: 'comptage', component: ComptageComponent },

  { path: 'points-quete', component:PointDeQuetesComponent},

  { path: 'tronc-queteur/depart', component: DepartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }