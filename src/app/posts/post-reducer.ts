import { createReducer, on } from '@ngrx/store';
import { fetchAllPost, postLoaded, showAll } from './post-action';
import { initialState } from './post-state';

export const postReducer = createReducer(
  initialState,
  on(showAll, (state, {}) => {
    return { ...state };
  }),
  on(postLoaded, (state, { data }) => {
    return [...data];
  })
);
