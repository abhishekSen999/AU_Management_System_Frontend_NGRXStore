import * as fromUser from './user.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface UserState {
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<UserState> = {
  user: fromUser.reducer,
};
