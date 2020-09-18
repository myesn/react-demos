import React from 'react';
import { connect } from 'react-redux';

import User from './User';

class Users extends React.Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        <p>users:</p>
        {users.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Users);
