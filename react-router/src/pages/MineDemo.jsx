import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Prompt } from 'react-router-dom';

class MineDemo extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  handleGoHomeClick = () => {
    this.props.history.replace('/');
  };

  render() {
    //const { match, location, history } = this.props;

    return (
      <div>
        mine demo
        <button onClick={this.handleGoHomeClick}>go home</button>
        <Prompt when={true} message="are you sure leave" />
      </div>
    );
  }
}

// 导出时使用高阶组件 withRouter 将本 component 包装，就可以从 this.props 中得到 match、location、history
export default withRouter(MineDemo);
