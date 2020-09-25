import React from 'react';

import Demo2 from './demo2/Index';
import Demo3 from './demo3/Index';

import App from './demo3/dynamic-context/app';
import App2 from './demo3/updating-context-from-a-nested-component/app';
import App3 from './demo3/consuming-multiple-contexts/app';

import Demo4 from './demo4/Index';

import Banner from './demo5/Banner';
import Banner2 from './demo5/Banner2';
import Banner3 from './demo5/Banner3';

import Demo6 from './demo6/Parent';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Demo2 />
        <Demo3 />
        <App />
        <App2 />
        <App3 />
        <Demo4 />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Demo6 />
      </div>
    );
  }
}
