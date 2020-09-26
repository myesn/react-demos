import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants';

const message = (state = null, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, message(null, action)];
    case REMOVE_MESSAGE:
      return state.filter((x) => x.id !== action.payload);
    default:
      return state;
  }
};

export default messages;
