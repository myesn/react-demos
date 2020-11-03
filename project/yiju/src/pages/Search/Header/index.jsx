import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'zarm';

import Searcher from '../../../components/Searcher';

class Header extends PureComponent {
  render() {
    const {
      keyword,
      onSearcherChange,
      onSearcherSubmit,
      onSearcherClear,
      onSearcherCancel,
    } = this.props;

    return (
      <NavBar
        left={<Icon type='arrow-left' onClick={onSearcherCancel} />}
        title={
          <Searcher
            showCancel={true}
            value={keyword}
            onSubmit={onSearcherSubmit}
            onChange={onSearcherChange}
            onClear={onSearcherClear}
            onCancel={onSearcherCancel}
          />
        }
      />
    );
  }
}

export default withRouter(Header);
