// 搜索

import base from './base';
import { get } from '../utils/http';

const search = {
  data(city, keyword, page) {
    return get(base.search, { city, keyword, page });
  },
};

export default search;
