import { Action } from '@ngrx/store';
import { SocialUser } from 'angularx-social-login';

export const LOGIN_USER = '[App] Login User';
export const LOGIN_USER_FAIL = '[App] Login User Fail';
export const LOGIN_USER_SUCCESS = '[App] Login User Success';

export const LOGOUT_USER = '[App] Logout Successful';
export const LOGOUT_FAILED = '[App] Logout Failed';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;
  constructor(public payload: any) {}
}

export class LoginUserFail implements Action {
  readonly type = LOGIN_USER_FAIL;
  constructor(public payload: any) {}
}

export class LoginUserSUccess implements Action {
  readonly type = LOGIN_USER_SUCCESS;
  constructor(public payload: SocialUser) {}
}

export type UserAction = LoginUser | LoginUserFail | LoginUserSUccess;
