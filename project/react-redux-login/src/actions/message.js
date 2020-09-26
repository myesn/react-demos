import shortid from 'shortid';

import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants';

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    payload: {
      id: shortid.generate(),
      ...message,
    },
  };
};

export const removeMessage = (id) => {
  return {
    type: REMOVE_MESSAGE,
    payload: id,
  };
};
