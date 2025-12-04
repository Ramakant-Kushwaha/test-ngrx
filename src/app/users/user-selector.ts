import { createFeatureSelector, createSelector } from '@ngrx/store';

export const USER_STATE = 'USER_STATE';

const userState = createFeatureSelector(USER_STATE);

export const getAllUsers = createSelector(userState, (state) => {
  return state;
});
