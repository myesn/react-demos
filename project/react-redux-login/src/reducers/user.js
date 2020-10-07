import { SET_LOGGED_IN_USER, SIGN_OUT } from '../constants';

const initialUser = {
  isAuthenticated: false,
  username: null,
};

const user = (user = initialUser, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return {
        ...user,
        ...action.payload,
      };
    case SIGN_OUT:
      return action.payload;
    default:
      return user;
  }
};

export default user;
