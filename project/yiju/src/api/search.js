// 搜索

import base from './base';
import { get } from '../utils/http';

const search = {
  data(city, keyword) {
    return get(base.search, { city, keyword });
  },
};

export default search;
