export interface ResponseObject {
  status: 'ok' | 'error';
  error?: String;
  data: Object;
  code: Number;
}
