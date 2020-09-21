import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user';

import Users from './Users';
import AddUser from './AddUser';

class UserManager extends React.Component {
  componentDidMount() {
    this.props.actions.fetchUsers();
  }

  render() {
    const { isFetching, error } = this.props;
    let usersView;

    if (error) {
      usersView = error.message;
    } else if (isFetching) {
      usersView = 'fetching...';
    } else {
      usersView = <Users />;
    }

    return (
      <div>
        <AddUser />
        <button onClick={() => this.props.actions.fetchUsers()}>refresh</button>
        {usersView}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.user.isFetching,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ fetchUsers }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManager);
