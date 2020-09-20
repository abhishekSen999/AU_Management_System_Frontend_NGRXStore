import { SocialUser } from 'angularx-social-login';
import * as fromUsers from '../actions';

export interface UserState {
  userDetails: SocialUser;
  loggedIn: boolean;
  login: boolean;
  logout: boolean;
}

export const initialState: UserState = {
  userDetails: {
    provider: 'hello',
    id: '1234',
    email: 'no email',
    name: 'no name',
    photoUrl: 'dsdsds',
    firstName: 'adasds',
    lastName: 'hbghjgh',
    authToken: 'sdsds',
    idToken: 'dsdsdsd',
    authorizationCode: 'sdsdsd',
  },
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
        userDetails: action.payload,
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

// state selectors

export const getUserDetails = (state: UserState) => state.userDetails;
export const getUserLoggedIn = (state: UserState) => state.loggedIn;
export const getUserLogin = (state: UserState) => state.login;
export const getUserLogout = (state: UserState) => state.logout;
