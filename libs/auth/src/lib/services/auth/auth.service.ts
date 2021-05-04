import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Authenticate, User } from '../../../../../data-models/src';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private adminUser: User = {
    username: 'alexis',
    id: 1,
    country: 'AU',
    token: 'abc123',
    role: 'admin',
  }

  private _user$ = new BehaviorSubject<User | null>(null);
  get user$(): Observable<User | null> {
    return this._user$.asObservable();
  }

  constructor() {
    this._user$.subscribe((user?: User) => {
      console.log(`[AuthService] Logged in? ${user ? user.username : 'NO'}`);
    })
  }

  login(authenticate: Authenticate): Observable<boolean> {
    if (authenticate.username === 'admin' && authenticate.password === 'admin') {
      this._user$.next({...this.adminUser});
      return of(true);
    }
    return of(false);
  }

  logout() {
    this._user$.next(null);
  }
}
