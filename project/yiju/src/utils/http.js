import axios from 'axios';

export function get(path, params) {
  return axios.get(path, { params });
}

export function post(path, data) {
  return axios.post(path, data);
}
