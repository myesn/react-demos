// 热门城市

import base from './base';
import { get } from '../utils/http';

const hotcity = {
  data() {
    return get(base.hotcity);
  },
};

export default hotcity;
