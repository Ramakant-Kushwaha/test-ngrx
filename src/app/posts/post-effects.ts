import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap, of, switchMap } from 'rxjs';
import { fetchAllPost, postLoaded, startFetch } from './post-action';
import { PostService } from './post.service';
import { Store } from '@ngrx/store';
import { Post } from './post-state';

@Injectable()
export class PostEffects {
  constructor(
    private action$: Actions,
    private post: PostService,
    private store: Store
  ) {}

  fetchAll$ = createEffect(() =>
    this.action$.pipe(
      ofType(startFetch),
      switchMap(() =>
        this.post.getData().pipe(map((res: any) => postLoaded({ data: res })))
      )
    )
  );
}
