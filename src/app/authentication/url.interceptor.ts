import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';
import { RCQDecodedJWT } from './RCQDecodedJWT';


export class UrlInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.url.indexOf("¤") > 0) 
        {
            let rcqDecodedJWT: RCQDecodedJWT = AuthenticationService.getDecodedRCQJWT();
            let rcqJWT: string = AuthenticationService.getRCQJWT();
            let urlPart: string = "";

            if (rcqDecodedJWT) 
            {
                urlPart = rcqDecodedJWT.roleId + "/ul/" + rcqDecodedJWT.ulId;
            }

            request = request.clone({
                setHeaders:{
                    'Authorization': `Bearer ${rcqJWT}`,
                    'Content-Type': 'application/json'
                  },
                url: request.url.replace("¤", urlPart)
            });
        }

        return next.handle(request);
    }
}