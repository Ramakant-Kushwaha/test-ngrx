export interface Post {
  id: number;
  title: string;
  context: string;
}

export const initialState: Post[] = [
  {
    id: 1,
    title: '11',
    context: '111',
  },
];
