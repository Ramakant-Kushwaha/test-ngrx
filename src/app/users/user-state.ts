export interface UserState {
  users: User[];
}

export class User {
  public id!: number;
  public name!: string;
  public description!: string;

  constructor() {}
}

export const initialState: UserState = {
  users: [],
};
