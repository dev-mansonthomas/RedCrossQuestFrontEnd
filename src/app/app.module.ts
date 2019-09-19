import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import {MatExpansionModule} from '@angular/material/expansion';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faComments, faUsers } from '@fortawesome/free-solid-svg-icons';

import { environment } from '../environments/environment';

import { QrCodeScannerModule  } from './tools/qr-code-scanner/qr-code-scanner.module';
import { QueteursModule  } from './queteurs/queteurs.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QueteModule } from './quete/quete.module';
import { PointDeQuetesModule } from './point-de-quetes/point-de-quetes.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { LoginComponent } from './authentication/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TroncsModule } from './troncs/troncs.module';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatBadgeModule,
    QrCodeScannerModule,
    QueteursModule,
    QueteModule,
    TroncsModule,
    PointDeQuetesModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig,
      () => 'RedCrossQuest',
     {
       enableFirestoreSync: true, // enable/disable autosync users with firestore
       toastMessageOnAuthSuccess: true, // whether to open/show a snackbar message on auth success - default : true
       toastMessageOnAuthError: true, // whether to open/show a snackbar message on auth error - default : true
       authGuardFallbackURL: '/', // url for unauthenticated users - to use in combination with canActivate feature on a route
       authGuardLoggedInURL: '/login', // url for authenticated users - to use in combination with canActivate feature on a route
       passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
       passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
       // Same as password but for the name
       nameMaxLength: 50,
       nameMinLength: 2,
       // If set, sign-in/up form is not available until email has been verified.
       // Plus protected routes are still protected even though user is connected.
       //guardProtectedRoutesUntilEmailIsVerified:true
       

     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCoffee);
    library.addIcons(faComments);
    library.addIcons(faUsers);

    
  }
}
