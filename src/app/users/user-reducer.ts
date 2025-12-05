import { createReducer, on } from '@ngrx/store';
import { dataLoaded, getAllUsers } from './user-action';
import { initialState } from './user-state';

export const userReducer = createReducer(
  initialState,

  on(getAllUsers, (state, {}) => {
    return { ...state };
  }),

  on(dataLoaded, (state, { users }) => {
    return {
      state,
      users,
    };
  })
);
