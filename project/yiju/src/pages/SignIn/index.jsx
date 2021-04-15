import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userInfoActions from '../../actions/userinfo';

import View from "./View";

class SignIn extends PureComponent {
  state = {};

  handleSignInClick = (username, password) => {
    console.log(`username:${username}, password:${password}`);
    const {signInUser} = this.props.userActions;

    signInUser({
      username: username,
      password: password
    })

    window.history.back();

  };

  render() {
    return <div><View onSignInClick={this.handleSignInClick}/></div>;
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userInfoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
