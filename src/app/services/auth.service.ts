import { Injectable } from '@angular/core';
import { User } from '../shared/models/models';
import { Router } from '@angular/router';


import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
// import { getAuth } from 'firebase/auth';

import 'firebase/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User | null | undefined>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }

  googleSignin() {
    return this.afAuth.signInWithPopup(new GoogleAuthProvider()).then((res) => {

      console.log(res);

      this.router.navigate(['/menu']);
      sessionStorage.setItem('user', JSON.stringify(res.user));
      // this.updateUserData(res.user);
    }, (err) => {
      console.log(err);
    });
  }

  updateUserData(user: User | any) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      address: user.address,
      phoneNo: user.phoneNo,
      residents: user.residents,
      isOrganisation: user.isOrganisation,
      emailVerified: user.emailVerified
    }

    return userRef.set(data, { merge: true })

  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
    sessionStorage.removeItem('user');
  }

  isLoggedIn() {
    if (sessionStorage.getItem('user')) {
      return true;
    }
    return false;
  }
}
