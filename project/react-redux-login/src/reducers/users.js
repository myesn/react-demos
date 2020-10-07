import { FILL_USERS } from '../constants';

const users = (users = [], action) => {
  switch (action.type) {
    case FILL_USERS:
      return action.payload;
    default:
      return users;
  }
};

export default users;
