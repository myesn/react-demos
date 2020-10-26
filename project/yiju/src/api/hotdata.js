// 首页热门和推荐接口

import base from './base';
import { get } from '../utils/http';

const hotdata = {
  data() {
    return get(base.hotdata);
  },
};

export default hotdata;
