import { createAction, props } from '@ngrx/store';
import { User } from './user-state';

const prefix = '[users]';

export const getAllUsers = createAction(prefix + 'get_all_users');

export const startFetch = createAction(prefix + 'Start Fetch');

export const dataLoaded = createAction(
  prefix + 'Data Loaded',
  props<{ users: User[] }>()
);

export const addNewUser = createAction(
  prefix + 'Add user data',
  props<{
    id: number;
    name: string;
    description: string;
  }>()
);
