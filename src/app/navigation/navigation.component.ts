import { Component, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

import {Router} from '@angular/router';

import { faUsers, faClock, faSignOutAlt, faSignInAlt, faCoins, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {


  onSignOut: EventEmitter<void> = new EventEmitter();
  
  myLink='queteurs';
  faUsers=faUsers;
  faClock=faClock;
  faSignOutAlt=faSignOutAlt;
  faSignInAlt=faSignInAlt; 
  faCoins=faCoins;
  faPlus=faPlus;

  pendingValidation="401";
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private auth: AngularFireAuth,
              private router: Router) {}

  signOut() {
    this.auth.auth.signOut()
      .then(() => {
        this.onSignOut.emit(); 
        this.router.navigate['/login'];
      })
      .catch(e => console.error('An error happened while signing out!', e));
  }

}
