import * as actions from '../constants';

export function addUser(id, name) {
  return {
    type: actions.addUser,
    payload: {
      id,
      name,
    },
  };
}
