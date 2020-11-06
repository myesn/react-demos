import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Panel, BackToTop } from 'zarm';
import { concat } from 'ramda';

import api from '../../api';

import Header from './Header';
import List from './List';
import LoadMore from '../../components/LoadMore';

class Search extends PureComponent {
  state = {
    data: {},
    keyword: '',
    page: 0,
  };

  componentDidMount() {
    this.initKeyword()
      .then(() => {
        const { keyword } = this.state;

        this.handleSearcherSubmit(keyword);
      })
      .catch(() => {});
  }

  initKeyword = () => {
    return new Promise((resolve, reject) => {
      const { location } = this.props;
      const params = new URLSearchParams(location.search);
      const keyword = params.get('keyword');

      if (keyword) {
        this.setState({ keyword }, resolve);
      } else {
        reject();
      }
    });
  };

  handleSearcherChange = (value) => {
    // 只有当 submit 之后，才需要改变 keyword 的值
    //this.setState({ keyword: value });
  };

  handleSearcherSubmit = (value) => {
    if (!value) return;

    const { city } = this.props;
    const { keyword } = this.state;

    if (keyword !== value) {
      this.setState({ keyword: value });
    }

    this.correctUrl(value);

    api.search.data(city, value, 0).then((res) => {
      this.setState({ data: res.data, page: 0 });
    });
  };

  handleSearcherClear = () => {
    // 只有当 submit 之后，才需要改变 keyword 的值
    // this.correctUrl('');
    // this.setState({ keyword: '' });
  };

  handleSearcherCancel = () => {
    const { history } = this.props;

    history.push('home');
  };

  handleLoadMore = () => {
    const { hasMore } = this.state.data;
    if (!hasMore) {
      return;
    }

    const { city } = this.props;
    const { keyword, data, page } = this.state;
    const { items } = data;

    api.search.data(city, keyword).then((res) => {
      const data = res.data;
      this.setState({
        data: {
          items: concat(items, data.items),
          hasMore: data.hasMore,
        },
        page: page + 1,
      });
    });
  };

  correctUrl = (keyword) => {
    const { history } = this.props;

    history.replace({
      pathname: 'search',
      search: keyword && '?keyword=' + keyword,
    });
  };

  render() {
    const { keyword, data } = this.state;
    const { items, hasMore } = data;

    return (
      <>
        <Header
          keyword={keyword}
          onSearcherChange={this.handleSearcherChange}
          onSearcherSubmit={this.handleSearcherSubmit}
          onSearcherClear={this.handleSearcherClear}
          onSearcherCancel={this.handleSearcherCancel}
        />
        <Panel title={`关键字 ${keyword} 的搜索结果`}>
          <List items={items} />
          {hasMore && <LoadMore onLoadMore={this.handleLoadMore} />}
        </Panel>
        <BackToTop>
          <div
            style={{
              width: 60,
              height: 60,
              lineHeight: '60px',
              textAlign: 'center',
              backgroundColor: '#fff',
              color: '#999',
              fontSize: 20,
              borderRadius: 30,
              boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
            }}>
            Up
          </div>
        </BackToTop>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.city,
});

export default connect(mapStateToProps)(Search);
