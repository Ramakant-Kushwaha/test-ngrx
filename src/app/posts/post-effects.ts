import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import { fetchAllPost } from './post-action';

@Injectable()
export class PostEffects {
  constructor(private action$: Actions) {}

  fetchAll$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fetchAllPost),
      switchMap(() => {
        return of([
          { id: 1, title: 'Hello Angular', content: 'Demo content' },
          { id: 2, title: 'JSON Server', content: 'Works great!' },
        ]);
      })
    );
  });
}
