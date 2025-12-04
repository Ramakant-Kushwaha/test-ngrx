import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { postLoaded, startFetch } from './post-action';
import { PostService } from './post.service';

@Injectable()
export class PostEffects {
  constructor(private action$: Actions, private post: PostService) {}

  fetchAll$ = createEffect(() =>
    this.action$.pipe(
      ofType(startFetch),
      switchMap(() =>
        this.post.getData().pipe(map((res: any) => postLoaded({ data: res })))
      )
    )
  );
}
