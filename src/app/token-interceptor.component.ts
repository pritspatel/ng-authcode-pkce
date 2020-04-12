import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {AuthService} from './auth-service.component';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth._user.access_token}`
      }
    });
    return next.handle(req);
  }

  constructor(public auth: AuthService) {}


}
