import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from 'store';

import * as cityActions from '../actions/city';

/**
 * 应用数据初始化：
 *  1. 城市初始化
 */
class App extends PureComponent {
  componentDidMount() {
    const localCity = store.get('city');

    this.props.cityActions.init(localCity || '成都');
  }

  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = (dispath) => ({
  cityActions: bindActionCreators(cityActions, dispath),
});

export default connect(null, mapDispatchToProps)(App);
