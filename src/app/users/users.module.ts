import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
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
    MatTableModule,
    HttpClientModule,
  ],
})
export class UsersModule {}
