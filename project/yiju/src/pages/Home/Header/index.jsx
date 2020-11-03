import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavBar } from 'zarm';

import Searcher from '../../../components/Searcher';
import Iconfont from '../../../components/Iconfont';
import styles from './index.module.scss';

function City({ text }) {
  return (
    <Link className={styles.city} to='/city'>
      <Iconfont type='iconchengshi' size='sm' />
      {text}
    </Link>
  );
}

function Right() {
  return <Iconfont type='iconcar' />;
}

class Header extends PureComponent {
  state = {
    search: '',
  };

  handleSearcherSubmit = (value) => {
    const { history } = this.props;

    this.handleSearcherChange(value);

    history.push({
      pathname: 'search',
      search: '?keyword=' + value,
    });
  };

  handleSearcherChange = (value) => {
    this.setState({ search: value });
  };

  render() {
    const { city } = this.props;
    const { search } = this.state;

    return (
      <NavBar
        left={<City text={city} />}
        title={
          <Searcher
            value={search}
            onSubmit={this.handleSearcherSubmit}
            onChange={this.handleSearcherChange}
            onClear={() => {
              this.handleSearcherChange('');
            }}
            onCancel={() => {
              this.handleSearcherChange('');
            }}
          />
        }
        right={<Right />}
      />
    );
  }
}

export default withRouter(Header);
