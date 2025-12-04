import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { startFetch } from './user-action';
import { getAllUsers } from './user-selector';
import { IUser } from './user-state';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  public user$: Observable<any>;

  constructor(private store: Store<IUser>) {
    this.user$ = of([]);
  }

  columns = [
    {
      columnDef: 'id',
      header: 'No.',
      cell: (element: IUser) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: IUser) => `${element.name}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: IUser) => `${element.description}`,
    },
  ];
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map((c) => c.columnDef);

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(startFetch());

      this.user$ = this.store.select(getAllUsers);

      this.user$.subscribe((res) => console.log(res));
    }, 1000);
  }
}
