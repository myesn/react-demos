import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as collectActions from "../../actions/collect";

import {NavBar, Icon, Tabs} from 'zarm';
import {concat} from 'ramda';

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
    const {location} = this.props;
    const params = new URLSearchParams(location.search);
    const id = params.get('id');

    this.setState({id});

    api.detail.data(id).then((res) => {
      this.setState({...res.data});
    });

    api.comment.data(id).then((res) => {
      this.setState({
        comment: res.data,
      });
    });
  }

  handleLoadMoreComments = () => {
    const {id, comment} = this.state;

    if (!comment.hasMore) return;

    api.comment.data(id).then((res) => {
      const {data} = res;

      this.setState({
        comment: {
          hasMore: data.hasMore,
          items: concat(comment.items, data.items),
        },
      });
    });
  };

  handleLeftClick = () => {
    const {history} = this.props;

    history.goBack();
  };

  handleCollectClick = (id) => {
    const {username} = this.props.userinfo;

    if (username) {
      // 实现收藏功能
      console.log(`${username} 收藏`);

      if (this.isCollect(id)) {
        this.props.actions.removeCollect(id);
      } else {
        this.props.actions.addCollect(id);
      }
    } else {
      this.props.history.push('/signin');
    }
  };

  handleBuyClick = (id) => {
    alert('buy' + id)
  };

  isCollect = (id) => {
    const {collect} = this.props;

    return collect.some(x => x === id);
  }

  render() {
    // 这里就不花过多时间在样式上了，只显示标题
    const {id, title, imgs, comment} = this.state;
    const {hasMore, items} = comment;

    const isCollect = this.isCollect(id);

    return (
      <>
        <NavBar
          left={<Icon type='arrow-left' onClick={this.handleLeftClick}/>}
          title='详情'
        />
        <Swiper items={imgs}/>
        <div>
          <button onClick={() => this.handleCollectClick(id)}>{isCollect ? '取消收藏' : '收藏'}</button>
          <button onClick={() => this.handleBuyClick(id)}>购买</button>
        </div>
        <Tabs swipeable>
          <Tabs.Panel title='房屋信息'>
            <p>{title}</p>
          </Tabs.Panel>
          <Tabs.Panel title='房屋评价'>
            <Comments items={items}/>
            {hasMore && <LoadMore onLoadMore={this.handleLoadMoreComments}/>}
          </Tabs.Panel>
        </Tabs>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    collect: state.collect
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(collectActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
