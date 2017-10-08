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
  tags: Array<number>;
  meta?: { votes: number, favs: number };
}

export interface User {
  _id: number;
  username: string;
  email: string;
  created_at: string;
  credits: number;
  ref: string;
  key: string;
}

export interface Admin {
  name: string;
  username: string;
  email: string;
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

export interface Dashboard {
  news: {count: number, readCount: number, categoryCount: number, tagCount: number};
  users: {count: number};
}

export interface WithdrawalRequest {
  _id: number;
  type: 'recharge' | 'bank';
  user_id: number;
  paid: boolean;
  paid_date: string;
  amount: number;
  created_at: string;
  updated_at: string;
  data?: {operator: string, number: number};
}

export interface Domain {
  _id: number;
  domain: string;
}
