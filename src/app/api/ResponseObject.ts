import {Category, News, User} from '../Interfaces';

interface Data {
  users?: Array<User>;
  user?: Array<User>;
  newses?: Array<News>;
  news?: News;
  categories?: Array<Category>;
  category?: Category;
}

export interface ResponseObject {
  status: 'ok' | 'error';
  error?: string;
  data: Data;
  code: number;
}
