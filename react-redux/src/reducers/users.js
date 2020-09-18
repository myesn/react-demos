import { addUser } from '../constants';

const users = (users = [], action) => {  
  switch (action.type) {
    case addUser:
      
      return [...users, action.payload];
    default:
      return users;
  }
};

export default users;
