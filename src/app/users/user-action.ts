import { createAction, props } from '@ngrx/store';
import { IUser } from './user-state';

const prefix = '[users]';

export const getAllUsers = createAction(prefix + 'get_all_users');

export const startFetch = createAction(prefix + '');

export const dataLoaded = createAction(
  prefix + 'Data Loaded',
  props<{ data: IUser[] }>()
);

export const addNewUser = createAction(
  prefix + 'Add user data',
  props<{
    id: number;
    name: string;
    description: string;
  }>()
);
