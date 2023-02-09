import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private cookie: CookieService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.ckeckCookieSession();
  }

  ckeckCookieSession(): boolean {
    try {
      const token = this.cookie.check('tokenSesion');
      if (!token) {
        this.router.navigate(['/', 'auth'])
      }
      return token
    } catch (error) {
      console.error('algo pasó', error);
      return false;
    }
  }

}
