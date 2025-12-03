import { createReducer, on } from '@ngrx/store';
import { getAllUsers } from './user-action';
import { initialState } from './user-state';

export const userReducer = createReducer(
  initialState,
  on(getAllUsers, (state, {}) => {
    return { ...state };
  })
);
