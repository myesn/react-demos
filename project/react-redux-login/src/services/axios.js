import axios from 'axios';

// import authorizationHeader from './auth/header';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 3000,
  // headers: {
  //   ...authorizationHeader(),
  // },
});

export default instance;
