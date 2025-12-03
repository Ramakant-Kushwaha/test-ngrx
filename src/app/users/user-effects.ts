import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { getAllUsers } from './user-action';
import { UserService } from './user.service';

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private us: UserService) {}

  fetchAllUser$ = this.action$.pipe(
    ofType(getAllUsers),
    switchMap(() => this.us.getAllUser())
  );
}
