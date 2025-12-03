export interface Post {
  id: number;
  title: string;
  content: string;
}

export const initialState: Post[] = [
  {
    id: 1,
    title: '11',
    content: '111',
  },
];
