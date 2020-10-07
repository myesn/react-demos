import http from '../services/axios';

export const signup = (params) => {
  // redux-trunk
  return (dispatch) => {
    return http.post('/user/signup', params);
  };
};

export const any = (username) => {
  return (dispatch) => {
    return http.get('/user/any', { params: { username } });
  };
};
