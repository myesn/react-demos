import {PureComponent} from "react";
import {connect} from 'react-redux';

class ShopCart extends PureComponent {

  componentWillMount() {
    const {userinfo, history} = this.props;

    if (userinfo.username) {
      return;
    }

    history.push('signin');
  }

  render() {
    return (
      <>
        购物车
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

export default connect(mapStateToProps)(ShopCart);