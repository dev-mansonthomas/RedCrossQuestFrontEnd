import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IdTokenResult } from '@firebase/auth-types';
import { User } from 'firebase/app';

import { from } from 'rxjs';
import { Router } from '@angular/router';
import { RCQJWT } from './RCQJWT';
import { FirebaseJWT } from './FirebaseJWT';

import { JwtHelperService } from '@auth0/angular-jwt';
import { RCQDecodedJWT } from './RCQDecodedJWT';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authenticationURL = "/rest/firebase-authenticate";
  private static rcqTokenLabel = "rcq-token";
  private static rcqTokenDecodedLabel = "rcq-d-token";
  constructor(  private http: HttpClient,
                private router: Router,
                private jwtHelper: JwtHelperService) { }


  /**
   * Once authenticated to Firebase, send the firebaseJWT to RCQ backend to authenticate and generate an RCQ JWT
   * the RCQ JWT is stored in local storage
   * @param firebaseJWTToken - the firebase JWT 
   */
  authenticate(firebaseUser:User){

    const observable = from(firebaseUser.getIdTokenResult());
    return observable.subscribe((idTokenResult:IdTokenResult) =>{

      let token : string = idTokenResult.token;
      let email : string = idTokenResult.claims.email;
      let firebaseJWTToken:FirebaseJWT = { token, email } as FirebaseJWT;
  
      let rcqJWTObservable = this.http.post<RCQJWT>(this.authenticationURL, firebaseJWTToken, httpOptions)
      .pipe(
        tap(_ => console.log('fetched RCQ JWT')),
        catchError(this.handleError<String>('authenticate', ""))
      );
  
      return rcqJWTObservable.subscribe((rcqToken:RCQJWT)=> {
        console.log("RCQ JWT Token : ",rcqToken);
        this.storeRCQJWT(rcqToken.token);

        console.log("RCQ JWT Token from storage: ",localStorage.getItem(AuthenticationService.rcqTokenLabel));
        //TODO move to login.component.ts
        this.router.navigate['/welcome'];
      });
    });
  }

  storeRCQJWT(rcqJWT:string)
  {
    localStorage.setItem(AuthenticationService.rcqTokenLabel, rcqJWT);

    localStorage.setItem(AuthenticationService.rcqTokenDecodedLabel, JSON.stringify(this.jwtHelper.decodeToken(rcqJWT)));
  }
  static getRCQJWT():string
  {
    return localStorage.getItem(this.rcqTokenLabel);
  }
  static getDecodedRCQJWT():RCQDecodedJWT
  {
    return new RCQDecodedJWT(JSON.parse(localStorage.getItem(this.rcqTokenDecodedLabel)));
  }


    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
