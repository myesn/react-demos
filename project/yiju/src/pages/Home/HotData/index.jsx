import React, { PureComponent } from 'react';
import { isEmpty } from 'ramda';
import store from 'store';

import api from '../../../api';
import View from './View';

class HotData extends PureComponent {
  state = {
    data1: [],
    data2: [],
  };

  componentDidMount() {
    this.initData();
  }

  initData = () => {
    let { city } = this.props;
    city = city || store.get('city', '成都');
    if (!city) return;

    api.hotdata.data(city).then((res) => {
      this.setState({ data1: res.data });
    });
    api.hotdata.data(city).then((res) => {
      this.setState({ data2: res.data });
    });
  };

  render() {
    const { data1, data2 } = this.state;
    const data1View = isEmpty(data1) ? (
      'data1 无数据'
    ) : (
      <View title='热销单品' items={data1} />
    );
    const data2View = isEmpty(data2) ? (
      'data2 无数据'
    ) : (
      <View title='家庭常用' items={data2} />
    );

    return (
      <>
        {data1View}
        {data2View}
      </>
    );
  }
}

export default HotData;
