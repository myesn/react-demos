import React, { PureComponent } from 'react';
import { NavBar, Icon, Tabs } from 'zarm';
import { concat } from 'ramda';

import api from '../../api';

import Swiper from '../../components/Swiper';
import LoadMore from '../../components/LoadMore';
import Comments from './Comments';

class Detail extends PureComponent {
  state = {
    comment: {
      hasMore: false,
      items: [],
    },
  };

  componentDidMount() {
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const id = params.get('id');

    this.setState({ id });

    api.detail.data(id).then((res) => {
      this.setState({ ...res.data });
    });

    api.comment.data(id).then((res) => {
      this.setState({
        comment: res.data,
      });
    });
  }

  handleLoadMoreComments = () => {
    const { id, comment } = this.state;

    if (!comment.hasMore) return;

    api.comment.data(id).then((res) => {
      const { data } = res;

      this.setState({
        comment: {
          hasMore: data.hasMore,
          items: concat(comment.items, data.items),
        },
      });
    });
  };

  handleLeftClick = () => {
    const { history } = this.props;

    history.goBack();
  };

  render() {
    // 这里就不花过多时间在样式上了，只显示标题
    const { title, imgs, comment } = this.state;
    const { hasMore, items } = comment;

    return (
      <>
        <NavBar
          left={<Icon type='arrow-left' onClick={this.handleLeftClick} />}
          title='详情'
        />
        <Swiper items={imgs} />
        <Tabs swipeable>
          <Tabs.Panel title='房屋信息'>
            <p>{title}</p>
          </Tabs.Panel>
          <Tabs.Panel title='房屋评价'>
            <Comments items={items} />
            {hasMore && <LoadMore onLoadMore={this.handleLoadMoreComments} />}
          </Tabs.Panel>
        </Tabs>
      </>
    );
  }
}

export default Detail;
