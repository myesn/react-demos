// 首页热门和推荐接口

import base from './base';
import { get } from '../utils/http';

const hotcity = {
  data() {
    return get(base.hotcity);
  },
};

export default hotcity;
