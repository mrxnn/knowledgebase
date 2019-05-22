import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user)
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        else
          return of(null);
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credentials = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserRecord(credentials.user);
  }

  updateUserRecord(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data, { merge: true });
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    // this.router.navigate(['/']);
  }
}
