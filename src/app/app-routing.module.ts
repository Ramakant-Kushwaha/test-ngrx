import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
  },

  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
