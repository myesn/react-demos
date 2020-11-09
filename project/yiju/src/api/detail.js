import base from './base';
import { get } from '../utils/http';

const detail = {
  data(id) {
    return get(base.detail, { id });
  },
};

export default detail;
