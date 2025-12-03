import { createAction } from '@ngrx/store';

const prefix = '[users]';

export const getAllUsers = createAction(prefix + 'get_all_users');

export const startFetch = createAction(prefix + '');
