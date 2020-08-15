import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            {/*  
            精准匹配(Switch + strict + exact 可以做到完全匹配包括末尾 / 符号，并只匹配一个组件)
            exact 忽略结尾 / 符号
            strict 完全匹配包括末尾 / 符号，当值为 true, exact 的值也必须为 true
           */}
            <NavLink
              exact
              strict
              to="/"
              activeClassName="selected"
              activeStyle={{ color: 'green' }}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              strict
              to={{
                pathname: '/mine',
                search: '?id=1005&name=myesn',
                state: {
                  fromAbc: true,
                },
              }}
              activeClassName="selected">
              mine
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              strict
              to={{
                pathname: '/hellomine',
                search: '?id=1005&name=myesn',
                state: {
                  fromAbc: true,
                },
              }}
              activeClassName="selected">
              hellomine
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              strict
              to="/mine/ucenter/1005/myesn"
              activeClassName="selected">
              ucenter
            </NavLink>
          </li>
          <li>
            <NavLink exact strict to="/demo" activeClassName="selected">
              demo
            </NavLink>
          </li>
          <li>
            <NavLink exact strict to="/shop" activeClassName="selected">
              shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/xxx" activeClassName="selected">
              notfoud
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
