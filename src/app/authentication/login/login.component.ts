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
    user.getIdTokenResult().then((idTokenResult:IdTokenResult)=> {
      console.log(idTokenResult.token);
      
      let token : string = idTokenResult.token;
      let rcqJWTToken = this.authenticationService.authenticate( { token } as FirebaseJWT);
      

      rcqJWTToken.subscribe((rcqToken:string)=> console.log("RCQ JWT Token : '"+rcqToken+"'"));
      
      this.router.navigate['/welcome'];
    });    
}

printError(event) {
  console.log("logged in error");
    console.error(event);
}
  ngOnInit() {
  }

}
