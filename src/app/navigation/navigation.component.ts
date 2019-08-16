import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

import { faUsers, faClock, faSignOutAlt, faSignInAlt, faCoins, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

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

  constructor(private breakpointObserver: BreakpointObserver) {}

}
