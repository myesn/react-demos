import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { TabBar } from 'zarm';
import { filter, startsWith, length } from 'ramda';

import './style.module.scss';
import Iconfont from '../Iconfont';

class Navigation extends PureComponent {
  state = {
    activeKey: 'home',
    visible: true,

    items: [
      { itemKey: 'home', title: '主页', icon: <Iconfont type='iconhome' /> },
      {
        itemKey: 'shop',
        title: '商城',
        icon: <Iconfont type='iconshop' />,
      },
      {
        itemKey: 'life',
        title: '生活服务',
        icon: <Iconfont type='iconlife' />,
      },
      { itemKey: 'mine', title: '我的', icon: <Iconfont type='iconmine' /> },
    ],
  };

  componentDidMount() {
    this.adjustActiveKey();
  }

  adjustActiveKey = () => {
    const { pathname } = this.props.location;
    const { items } = this.state;
    var matched = filter(
      (item) => startsWith(`/${item.itemKey}`, pathname),
      items
    );
    if (length(matched) === 1) {
      this.setActiveKey(matched[0].itemKey);
    }
  };

  onChange = (key) => {
    this.setActiveKey(key);

    this.redirect(key);
  };

  redirect = (key) => {
    this.props.history.push(key);
  };

  setActiveKey = (key) => {
    this.setState({ activeKey: key });
  };

  setVisible = (visible) => {
    this.setState({ visible: visible });
  };

  render() {
    const { activeKey, visible, items } = this.state;
    const itemsView = items.map((item) => (
      <TabBar.Item key={item.itemKey} {...item} />
    ));

    return (
      <>
        <TabBar
          visible={visible}
          activeKey={activeKey}
          onChange={this.onChange}>
          {itemsView}
        </TabBar>
      </>
    );
  }
}

export default withRouter(Navigation);
