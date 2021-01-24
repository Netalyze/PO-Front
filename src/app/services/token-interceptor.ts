import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor( private authService: AuthService ) {
    }

    intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        const authToken = this.authService.token;
        const authRequest = req.clone( {
            headers: req.headers.set( 'Authorization', 'Bearer ' + authToken ),
        } );
        if (authToken) {
            return next.handle( authRequest ).pipe(
                tap(( event: HttpEvent<any> ) => {
                           if ( event instanceof HttpResponse ) {
                               // console.log( 'Service Response thr Interceptor' );
                           }
                       }, ( err: any ) => {
                           if ( err instanceof HttpErrorResponse ) {
                               if ( err.status === 401 || err.status === 403 ) {
                                   this.authService.logout();
                               }
                           }
                       }
                       )
            );
        }
        else {
            return next.handle(req);
        }    
    }
}
