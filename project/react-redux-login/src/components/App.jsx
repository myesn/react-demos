import React from 'react';
import { connect } from 'react-redux';

import UserList from '../components/user/List';

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props;

    let userListView;
    if (isAuthenticated) {
      userListView = <UserList />;
    }

    return (
      <div className='jumbotron'>
        <h1>React Redux Login</h1>
        {userListView}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
