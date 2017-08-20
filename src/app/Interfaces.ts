export interface News {
  title: string;
  desc: string;
  author: string;
  created_at?: number;
  credits: number;
  thumbnail: { url1: string, url2?: string, url3?: string };
  time: number;
  category: string;
  meta?: { votes: number, favs: number };
}
export interface User {
  username: string;
  email: string;
  registered: string;
  credits: number;
}
