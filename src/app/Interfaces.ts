export interface News {
  _id?: number;
  title: string;
  desc: string;
  author: string;
  created_at?: number;
  credits: number;
  thumbnail: { url1: string, url2?: string, url3?: string };
  time: number;
  category: number;
  tags: Array<Tag>;
  meta?: { votes: number, favs: number };
}

export interface User {
  username: string;
  email: string;
  created_at: string;
  credits: number;
}

export interface Category {
  name: string;
  _id: number;
  meta?: Object;
}

export interface Tag {
  name: string;
  _id: number;
  meta?: Object;
}
