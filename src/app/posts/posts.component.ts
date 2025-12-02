import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllPosts } from './post-selector';
import { Post } from './post-state';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  public posts$: Observable<Post[]>;

  constructor(private store: Store<Post>) {
    this.posts$ = this.store.select(getAllPosts);

    this.posts$.subscribe((res) => console.log(res));
  }
}
