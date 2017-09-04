import {Category, News, Tag, User} from '../Interfaces';

interface Data {
  users?: Array<User>;
  user?: Array<User>;
  newses?: Array<News>;
  news?: News;
  categories?: Array<Category>;
  category?: Category;
  tags?: Array<Tag>;
  tag?: Tag;
}

export interface ResponseObject {
  status: 'ok' | 'error';
  error?: string;
  data: Data;
  code: number;
}
