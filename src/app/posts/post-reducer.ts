import { createReducer, on } from '@ngrx/store';
import { fetchAllPost, showAll } from './post-action';
import { initialState } from './post-state';

export const postReducer = createReducer(
  initialState,
  on(showAll, (state, {}) => {
    return { ...state };
  }),
  on(fetchAllPost, (state, { data }) => {
    return {
      ...data,
    };
  })
);
