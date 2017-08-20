import {News, User} from '../Interfaces';

interface Data {
  users?: Array<User>;
  news?: Array<News>;
}

export interface ResponseObject {
  status: 'ok' | 'error';
  error?: string;
  data: Data;
  code: number;
}
