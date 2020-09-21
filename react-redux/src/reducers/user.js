import {
  addUser,
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from '../constants';

const initialState = {
  items: [],
  isFetching: false,
  error: null,
};

const user = (user, action) => {
  switch (action.type) {
    case addUser:
      return { ...action.payload };
    default:
      return user;
  }
};

const fetchUsers = (state = initialState, action) => {
  switch (action.type) {
    case fetchUsersRequest:
      return {
        items: [],
        isFetching: true,
        error: null,
      };
    case fetchUsersSuccess:
      return {
        items: action.payload,
        isFetching: false,
        error: null,
      };
    case fetchUsersFailure:
      return {
        items: [],
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case addUser:
      return {
        ...initialState,
        items: [...state.items, user(void 0, action)],
      };
    case fetchUsersRequest:
    case fetchUsersSuccess:
    case fetchUsersFailure:
      return fetchUsers(state, action);
    default:
      return state;
  }
};

export default users;
