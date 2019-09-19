import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { QueteursComponent} from './queteurs/queteurs/queteurs.component';
import { QueteurComponent} from './queteurs/queteur/queteur.component';

import { PreparationComponent } from './quete/preparation/preparation.component';
import { DepartComponent } from './quete/depart/depart.component';
import { RetourComponent } from './quete/retour/retour.component';
import { ComptageComponent } from './quete/comptage/comptage.component';

import { PointDeQuetesComponent } from './point-de-quetes/point-de-quetes/point-de-quetes.component';
import { LoginComponent } from './authentication/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoggedInGuard } from 'ngx-auth-firebaseui';
import { TroncsComponent } from './troncs/troncs/troncs.component';
import { CurrentUserComponent } from './authentication/current-user/current-user.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'current-user', component: CurrentUserComponent, canActivate:[LoggedInGuard] },
  { path: 'welcome', component: WelcomeComponent, canActivate:[LoggedInGuard] },

  { path: 'queteurs', component: QueteursComponent, canActivate:[LoggedInGuard] },
  { path: 'queteur', component: QueteurComponent, canActivate:[LoggedInGuard] },

  { path: 'preparation', component: PreparationComponent, canActivate:[LoggedInGuard] },
  { path: 'depart', component: DepartComponent, canActivate:[LoggedInGuard] },
  { path: 'retour', component: RetourComponent, canActivate:[LoggedInGuard] },
  { path: 'comptage', component: ComptageComponent, canActivate:[LoggedInGuard] },

  { path: 'points-quete', component:PointDeQuetesComponent, canActivate:[LoggedInGuard]},

  { path: 'troncs', component: TroncsComponent, canActivate:[LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }