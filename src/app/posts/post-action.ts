import { createAction, props } from '@ngrx/store';
import { Post } from './post-state';

const prefix = '[app post]';

export const showAll = createAction(prefix + 'show all');
export const fetchAllPost = createAction(
  prefix + 'fetchAllPost',
  props<{ data: Post[] }>()
);
