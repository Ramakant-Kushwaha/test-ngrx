export interface IUser {
  id: number;
  name: string;
  description: string;
}

export const initialState: IUser[] = [];

export class User {
  public id!: number;
  public name!: string;
  public description!: string;

  constructor() {}
}
