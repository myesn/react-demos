import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, SearchBar } from 'zarm';

import Iconfont from '../../../components/Iconfont';
import './index.scss';

function City() {
  return (
    <Link className='city' to='/city'>
      成都
      <Iconfont type='iconchengshi' size='sm' />
    </Link>
  );
}

function Search() {
  return (
    <SearchBar
      onSubmit={(value) => {
        console.log(`搜索内容为${value}`);
      }}
      onFocus={() => {
        console.log('获取焦点');
      }}
      onChange={(value) => {
        console.log(value);
      }}
      onBlur={() => {
        console.log('失去焦点');
      }}
      onClear={() => {
        console.log('点击了清除');
      }}
      onCancel={() => {
        console.log('点击了取消');
      }}
    />
  );
}

function Right() {
  return <Iconfont type='iconcar' />;
}

class Header extends PureComponent {
  render() {
    return <NavBar left={<City />} title={<Search />} right={<Right />} />;
  }
}

export default Header;
