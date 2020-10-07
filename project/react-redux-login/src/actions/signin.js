import jwt_decode from 'jwt-decode';

import http from '../services/axios';

import { SET_LOGGED_IN_USER, SIGN_OUT } from '../constants';

export const signin = (params) => {
  return (dispatch) => {
    return http.post('/user/signin', params);
  };
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: SIGN_OUT,
    payload: {
      isAuthenticated: false,
    },
  };
};

export const setLoggedInUser = (token) => {
  if (token) {
    localStorage.setItem('token', token);
  }

  var jwtToken = token;
  if (!jwtToken) {
    jwtToken = localStorage.getItem('token');
  }

  if (!jwtToken) {
    return {
      type: SET_LOGGED_IN_USER,
      payload: {
        isAuthenticated: false,
      },
    };
  }

  var decoded = jwt_decode(jwtToken);
  var username = decoded.preferred_username;

  return {
    type: SET_LOGGED_IN_USER,
    payload: {
      isAuthenticated: true,
      username: username,
    },
  };
};
