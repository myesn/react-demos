import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'zarm';

import Searcher from '../../../components/Searcher';

class Header extends PureComponent {
  state = {
    search: '',
  };

  componentDidMount() {
    const { search } = this.props.location;

    const params = new URLSearchParams(search);
    const keyword = params.get('keyword');

    this.handleSearcherChange(keyword);
  }

  handleSearcherSubmit = (value) => {
    const { history } = this.props;

    this.handleSearcherChange(value);

    history.replace({
      pathname: 'search',
      search: '?keyword=' + value,
    });
  };

  handleSearcherChange = (value) => {
    this.setState({ search: value });
  };

  handleSearcherCancel = () => {
    const { history } = this.props;

    history.push('home');
  };

  render() {
    const { search } = this.state;

    return (
      <NavBar
        left={<Icon type='arrow-left' onClick={this.handleSearcherCancel} />}
        title={
          <Searcher
            showCancel={true}
            value={search}
            onSubmit={this.handleSearcherSubmit}
            onChange={this.handleSearcherChange}
            onClear={() => {
              this.handleSearcherChange('');
            }}
            onCancel={() => this.handleSearcherCancel()}
          />
        }
      />
    );
  }
}

export default withRouter(Header);
