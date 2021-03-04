import React, {PureComponent} from "react";
import {Input, Cell, Button} from 'zarm';

export default class View extends PureComponent {
  state = {
    username: '',
    password: ''
  }

  handleUsernameChange = (value) => {
    this.setState({
      username: value
    });
  }

  handlePasswordChange = (value) => {
    this.setState({
      password: value
    });
  }

  render() {
    const {onSignInClick} = this.props;
    const {username, password} = this.state;

    return (
      <>
        <Cell title="用户名">
          <Input
            clearable
            type="text"
            placeholder="username"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </Cell>
        <Cell title="密码">
          <Input
            clearable
            type="password"
            placeholder="password"
            value={password}
            onChange={this.handlePasswordChange}
          />
        </Cell>
        <Button block={true} shadow={true} theme="primary" onClick={() => {
          onSignInClick(username, password);
        }}>登录</Button>
      </>
    )
  }
}