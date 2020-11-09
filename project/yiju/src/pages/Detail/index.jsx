import React, { PureComponent } from 'react';
import { NavBar, Icon, Tabs } from 'zarm';

import api from '../../api';

import Swiper from '../../components/Swiper';

class Detail extends PureComponent {
  state = {};

  componentDidMount() {
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const id = params.get('id');

    this.setState({ id });

    api.detail.data(id).then((res) => {
      this.setState({ ...res.data });
    });
  }

  handleLeftClick = () => {
    const { history } = this.props;

    history.goBack();
  };

  render() {
    // 这里就不花过多时间在样式上了，只显示标题
    const { title, imgs } = this.state;

    return (
      <>
        <NavBar
          left={<Icon type='arrow-left' onClick={this.handleLeftClick} />}
          title='详情'
        />
        <Swiper items={imgs} />
        <p>{title}</p>
        <Tabs
          swipeable
          onChange={(i) => {
            //console.log(i);
          }}>
          <Tabs.Panel title='选项卡1'>
            <div className='content'>试试点我左滑</div>
          </Tabs.Panel>
          <Tabs.Panel title='选项卡2'>
            <div className='content'>试试点我右滑</div>
          </Tabs.Panel>
        </Tabs>
      </>
    );
  }
}

export default Detail;
