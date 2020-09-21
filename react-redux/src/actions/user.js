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

function _fetchUserRequest() {
  return {
    type: actions.fetchUsersRequest,
  };
}

function _fetchUsersSuccess(users) {
  return {
    type: actions.fetchUsersSuccess,
    payload: users,
  };
}

function _fetchUserFailure(error) {
  return {
    type: actions.fetchUsersFailure,
    payload: error,
    error: true,
  };
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(_fetchUserRequest());

    fetch('https://api.jsonbin.io/v3/b/5f68ca8665b18913fc50930c', {
      headers: {
        'X-Master-Key':
          '$2b$10$Q0sgJTHiyEB1h5k9ma0ZsuVH1dHKPMd8FnUMer.zUnJkLE6eVL.H.',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(_fetchUsersSuccess(data.record));
      })
      .catch((error) => {
        dispatch(_fetchUserFailure(error));
        console.error('fetchUsers error: ', error);
      });
  };
};
