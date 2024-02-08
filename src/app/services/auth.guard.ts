import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.afAuth.user.pipe(
      map(user => {
        if (user) {
          console.log('User is logged in');

          return true; // Authorized user
        } else {
          console.log('User is not logged in');

          this.router.navigate(['']);
          return false; // Not authorized, redirect to login
        }
      })
    );
  }
}
