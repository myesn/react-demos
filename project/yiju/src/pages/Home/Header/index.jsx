import React, { PureComponent } from 'react';
import { NavBar } from 'zarm';

import './index.scss';
import Left from './Left';
import Search from './Search';
import Right from './Right';

class Header extends PureComponent {
  render() {
    return <NavBar left={<Left />} title={<Search />} right={<Right />} />;
  }
}

export default Header;
