import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'zarm';

import api from '../../api';

import Header from './Header';
import List from './List';

class Search extends PureComponent {
  state = {
    data: {},
    keyword: '',
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

    api.search.data(city, value).then((res) => {
      this.setState({ data: res.data });
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

  correctUrl = (keyword) => {
    const { history } = this.props;

    history.replace({
      pathname: 'search',
      search: keyword && '?keyword=' + keyword,
    });
  };

  render() {
    const { keyword, data } = this.state;

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
          <List data={data} />
        </Panel>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.city,
});

export default connect(mapStateToProps)(Search);
