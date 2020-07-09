import { SocialUser } from 'angularx-social-login';
import * as fromUsers from '../actions';

export interface UserState {
  user: SocialUser;
  loggedIn: boolean;
  login: boolean;
  logout: boolean;
}

export const initialState: UserState = {
  user: undefined,
  loggedIn: false,
  login: false,
  logout: false,
};

export function reducer(
  state: UserState = initialState,
  action: fromUsers.UserAction
): UserState {
  switch (action.type) {
    case fromUsers.LOGIN_USER: {
      return {
        ...state,
        login: true,
        loggedIn: false,
        logout: false,
      };
    }
    case fromUsers.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        login: false,
        loggedIn: true,
        logout: false,
      };
    }
    case fromUsers.LOGIN_USER_FAIL: {
      return {
        ...state,
        login: false,
        loggedIn: false,
        logout: false,
      };
    }
  }

  return state;
}
