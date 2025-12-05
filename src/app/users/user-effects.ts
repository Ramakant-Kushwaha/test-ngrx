import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { addNewUser, dataLoaded, startFetch } from './user-action';
import { UserService } from './user.service';

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private us: UserService) {}

  fetchAllUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(startFetch),
      switchMap(() =>
        this.us.getAllUser().pipe(map((res: any) => dataLoaded({ users: res })))
      )
    )
  );

  addNewUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(addNewUser),
      switchMap((action) => {
        console.log(action);
        return this.us
          .addNewUser({
            id: action.id,
            name: action.name,
            description: action.description,
          })
          .pipe(map((res) => startFetch()));
      })
    )
  );
}
