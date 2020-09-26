import React from 'react';

import { Link, NavLink } from 'react-router-dom';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <Link className='navbar-brand' to='#'>
            Signin & Signup Demo
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              {/* 
                  这里用 bootstrap 本来应该是在 li 的 class 中加 active，但为了方便我就使用的 NavLink,
                  因为 NavLink 是 <Link>的一个特殊版本，当呈现的元素与当前URL匹配时，它将向该元素添加样式属性。
              */}
              <li className='nav-item'>
                <NavLink exact strict className='nav-link' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink exact strict className='nav-link' to='/signup'>
                  Sign up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
