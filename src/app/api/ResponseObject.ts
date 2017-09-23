import {Category, News, Tag, User, Dashboard, WithdrawalRequest} from '../Interfaces';

interface Data {
  users?: Array<User>;
  user?: User;
  newses?: Array<News>;
  news?: News;
  categories?: Array<Category>;
  category?: Category;
  tags?: Array<Tag>;
  tag?: Tag;
  dashboard?: Dashboard;
  withdrawRequests?: Array<WithdrawalRequest>;
}

export interface ResponseObject {
  status: 'ok' | 'error';
  error?: string;
  data: Data;
  code: number;
}
