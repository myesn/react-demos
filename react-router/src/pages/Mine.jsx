import React from 'react';
import qs from 'querystring';

import MineDemo from './MineDemo';

export default class Home extends React.Component {
  handleGoHomeClick = () => {
    // this.props.history.push('/'); // 把一个新的条目（地址）推送到历史中，应该是可以 goBack
    this.props.history.replace('/'); // 替换历史堆栈上的当前条目，这个不能 goback
  };

  render() {
    // const params = new URLSearchParams(this.props.location.search);
    // const id = params.get('id');
    // const name = params.get('name');
    const params = qs.parse(this.props.location.search);
    console.log(this.props.location.state);
    return (
      <div>
        mine: {params['?id']} - {params.name}
        <div>
          <button onClick={this.handleGoHomeClick}>go home</button>
        </div>
        <MineDemo />
      </div>
    );
  }
}
