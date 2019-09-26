import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FirebaseJWT } from './FirebaseJWT';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authenticationURL = "/rest/firebase-authenticate";
  constructor( private http: HttpClient) { }


  authenticate(firebaseJWTToken:FirebaseJWT):Observable<String>{

    return this.http.post<String>(this.authenticationURL, firebaseJWTToken, httpOptions)
    .pipe(
      tap(_ => console.log('fetched RCQ JWT')),
      catchError(this.handleError<String>('authenticate', ""))
    );
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
