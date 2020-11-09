import base from './base';
import { get } from '../utils/http';

const comment = {
  data(id) {
    return get(base.comment, { id });
  },
};

export default comment;
