import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './post-reducer';
import { POST_STATE } from './post-selector';
import { PostsComponent } from './posts.component';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './post-effects';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
];

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(POST_STATE, postReducer),
    EffectsModule.forFeature([PostEffects]),
  ],
  providers: [PostService],
})
export class PostsModule {}
