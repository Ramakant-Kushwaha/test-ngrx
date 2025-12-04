import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './user-effects';
import { userReducer } from './user-reducer';
import { USER_STATE } from './user-selector';
import { UserService } from './user.service';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
];

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(USER_STATE, userReducer),
    EffectsModule.forFeature([UserEffects]),
    MatTableModule,
    HttpClientModule,
  ],
  providers: [UserService],
})
export class UsersModule {}
