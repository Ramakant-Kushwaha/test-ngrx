import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from './post-state';

export const POST_STATE: string = 'post';

const getPostState = createFeatureSelector<Post[]>(POST_STATE);

export const getAllPosts = createSelector(getPostState, (state) => {
  return state;
});
