import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { User } from 'firebase/app';
import { IdTokenResult } from '@firebase/auth-types';
import { AuthenticationService } from '../authentication.service';
import { FirebaseJWT } from '../FirebaseJWT';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  successfulLogin(user:User) {

    console.log(user);

    this.authenticationService.authenticate(user);
    


}

printError(event) {
  console.log("logged in error");
    console.error(event);
}
  ngOnInit() {
  }

}
