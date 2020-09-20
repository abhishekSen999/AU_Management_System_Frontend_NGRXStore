import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromUserStore from '../../containers/login/store';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'any',
})
export class UserService {
  private userLoggedIn$: Observable<Boolean>;
  constructor(
    private router: Router,
    private store: Store<fromUserStore.UserStatusState>
  ) {}

  checkLoggedInAndRedirect(
    redirectSuccesUrl: String,
    redirectFailUrl: String = '/login'
  ) {
    this.userLoggedIn$ = this.store.select(fromUserStore.getUserLoggedIn).pipe(
      map((userLoggedIn) => userLoggedIn),
      catchError((error) => {
        return of(error);
      })
    );
    this.userLoggedIn$.subscribe((loggedIn) => {
      console.log(loggedIn);
      if (loggedIn == true) this.router.navigate([redirectSuccesUrl]);
      else this.router.navigate([redirectFailUrl]);
    });
  }
}
