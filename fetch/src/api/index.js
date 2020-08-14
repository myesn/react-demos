import base from './base';
import { httpGet, httpPost } from '../utils/http';

const api = {
  get() {
    return httpGet(base.url + base.path);
  },
  post() {
    return httpPost(base.url + base.path, {
      a: 1,
    });
  },
};

export default api;
