import React from 'react';

export default class IfDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      names: [],
    };
  }

  componentDidMount() {
    // server faker
    setTimeout(() => {
      this.setState((state) => ({
        names: state.names.concat(['myesn']),
      }));
    }, 1000);

    setTimeout(() => {
      this.setState((state) => ({
        names: state.names.concat(['bob']),
      }));
    }, 2000);
  }

  handleLoginClick = () => {
    this.setState((state) => ({
      isLogin: !state.isLogin,
    }));
  };

  render() {
    let loginDescroption = this.state.isLogin ? (
      <div>已登录</div>
    ) : (
      <div>请登录</div>
    );
    let loginButtonText = this.state.isLogin ? '注销' : '登录';

    const { names } = this.state;
    let namesView =
      names.length > 0 ? (
        <div>
          {names.map((name, index) => {
            return <p key={index}>{name}</p>;
          })}
        </div>
      ) : (
        <div>请等待数据正在请求..</div>
      );

    return (
      <div>
        conditional rendering: {loginDescroption}
        <button onClick={this.handleLoginClick}>{loginButtonText}</button>
        {namesView}
      </div>
    );
  }
}
