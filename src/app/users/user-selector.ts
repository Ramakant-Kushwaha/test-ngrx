import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from './user-state';

export const USER_STATE_KEY = 'users';

const userState = createFeatureSelector<User[]>(USER_STATE_KEY);

export const getAllUsers = createSelector(userState, (state) => {
  return state;
});
