import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchUsers } from '../../actions/user';

function Item(props) {
  return <li>username: {props.userName}</li>;
}

class List extends Component {
  componentDidMount() {
    const { fetchUsers } = this.props.actions;
    fetchUsers();
  }

  render() {
    const { users } = this.props;
    if (!users || users.length === 0) {
      return <></>;
    }

    return (
      <ul>
        {users.map((user, index) => (
          <Item key={index} {...user} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ fetchUsers }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
