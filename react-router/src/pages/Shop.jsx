import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Shop extends React.Component {
  render() {
    console.log(this.props);
    const { isLogin } = this.props;
    const view = isLogin ? <div>shop</div> : <Redirect to="/" />;
    return <div>{view}</div>;
  }
}
