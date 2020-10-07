import http from '../services/axios';
import authorizationHeader from '../services/auth/header';
import { FILL_USERS } from '../constants';

const fillUsers = (users) => {
  return {
    type: FILL_USERS,
    payload: users,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    http
      .get('/user/list', {
        headers: {
          ...authorizationHeader(),
        },
      })
      .then((response) => {
        dispatch(fillUsers(response.data || []));
      })
      .catch(({ response }) => {
        console.log('fetch users error:', response || '接口超时');
      });
  };
};
