import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import * as userActions from '../actions/index';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { switchMap, map, catchError } from 'rxjs/operators';

import * as fromLoginServices from '../../../../services/login';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private loginServices: fromLoginServices.LoginService
  ) {}

  @Effect()
  loginUser$: Observable<Action> = this.actions$
    .pipe(ofType(userActions.LOGIN_USER))
    .pipe(
      switchMap(() => {
        return this.loginServices.signIn().pipe(
          map((userDetails) => new userActions.LoginUserSuccess(userDetails)),
          catchError((error) => of(new userActions.LoginUserFail(error)))
        );
      })
    );
}
