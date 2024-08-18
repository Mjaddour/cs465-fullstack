import { Injectable, Provider } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let isAuthAPI: boolean = false;

    // Check if the request is for login or registration
    if (request.url.startsWith('login') || request.url.startsWith('register')) {
      isAuthAPI = true;
    }

    // If the user is logged in and the request is not for auth API
    if (this.authenticationService.isLoggedIn() && !isAuthAPI) {
      const token = this.authenticationService.getToken();

      // Clone the request and set the Authorization header with the token
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Pass the cloned request with the token to the next handler
      return next.handle(authReq);
    }

    // Otherwise, pass the original request to the next handler
    return next.handle(request);
  }
}

// Provider for the interceptor
export const authInterceptProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true,
};
