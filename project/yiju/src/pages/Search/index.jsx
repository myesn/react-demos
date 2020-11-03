import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import api from '../../api';

import Header from './Header';

class Search extends PureComponent {
  state = {
    data: {},
    keyword: '',
  };

  componentDidMount() {
    this.initKeyword().then(() => {
      const { keyword } = this.state;

      this.handleSearcherSubmit(keyword);
    });
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
    this.setState({ keyword: value });
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
    this.correctUrl('');

    this.handleSearcherChange('');
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
    const { keyword } = this.state;

    return (
      <>
        <Header
          keyword={keyword}
          onSearcherChange={this.handleSearcherChange}
          onSearcherSubmit={this.handleSearcherSubmit}
          onSearcherClear={this.handleSearcherClear}
          onSearcherCancel={this.handleSearcherCancel}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.city,
});

export default connect(mapStateToProps)(Search);
