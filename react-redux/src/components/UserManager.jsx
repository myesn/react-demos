import React from 'react';

import Users from './Users';
import AddUser from './AddUser';

export default class UserManager extends React.Component {
  render() {
    return (
      <div>
        <AddUser />
        <Users />
      </div>
    );
  }
}
