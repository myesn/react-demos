import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cityActions from '../actions/city';

/**
 * 应用数据初始化：
 *  1. 城市初始化
 */
class App extends PureComponent {

  componentDidMount(){
    this.props.cityActions.init('成都');
  }

  render() {
    return this.props.children;
  }
}

const mapStateToProps = (state) => ({
  city: state.city,
});
const mapDispatchToProps = (dispath) => ({
  cityActions: bindActionCreators(cityActions, dispath),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
