import React, { PureComponent } from 'react';

import Header from './Header';
import Swiper from '../../components/Swiper';
import HotData from './HotData';

import banner1 from '../../assets/images/banner/1.png';
import banner2 from '../../assets/images/banner/2.png';
import banner3 from '../../assets/images/banner/3.png';
import banner4 from '../../assets/images/banner/4.png';
import banner5 from '../../assets/images/banner/5.png';
import banner6 from '../../assets/images/banner/6.png';

class Home extends PureComponent {
  state = {
    swiperItems: [banner1, banner2, banner3, banner4, banner5, banner6],
  };

  render() {
    const { swiperItems } = this.state;

    return (
      <>
        <Header />
        <Swiper items={swiperItems} autoPlay={false} />
        <HotData />
      </>
    );
  }
}

export default Home;
