import * as fromUser from './user.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export interface UserStatusState {
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<UserStatusState> = {
  user: fromUser.reducer,
};

export const getUserStatusState = createFeatureSelector<UserStatusState>(
  'userStatus'
);

//user state
export const getUserState = createSelector(
  getUserStatusState,
  (state: UserStatusState) => state.user
);

export const getUserDetails = createSelector(
  getUserState,
  fromUser.getUserDetails
);

export const getUserLoggedIn = createSelector(
  getUserState,
  fromUser.getUserLoggedIn
);

export const getUserLogin = createSelector(getUserState, fromUser.getUserLogin);

export const getUserLogout = createSelector(
  getUserState,
  fromUser.getUserLogout
);
