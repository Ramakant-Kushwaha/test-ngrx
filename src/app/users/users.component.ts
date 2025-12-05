import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { startFetch } from './user-action';
import { getAllUsers } from './user-selector';
import { User } from './user-state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  public user$: Observable<any>;

  constructor(private store: Store) {
    this.user$ = of([]);
  }

  columns = [
    {
      columnDef: 'id',
      header: 'No.',
      cell: (element: User) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: User) => `${element.name}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: User) => `${element.description}`,
    },
  ];
  displayedColumns = this.columns.map((c) => c.columnDef);

  ngOnInit(): void {
    this.user$ = this.store.select(getAllUsers);
    setTimeout(() => {
      this.store.dispatch(startFetch());

      this.user$.subscribe((res) => console.log(res));
    }, 1000);
  }
}
