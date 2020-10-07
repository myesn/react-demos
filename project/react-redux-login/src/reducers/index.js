import { combineReducers } from 'redux';

import messages from './messages';
import user from './user';
import users from './users';

const rootReducer = combineReducers({
  messages,
  user,
  users,
});

export default rootReducer;
