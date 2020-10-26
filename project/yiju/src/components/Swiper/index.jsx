import React, { PureComponent } from 'react';
import { Carousel } from 'zarm';
import { isNil, isEmpty } from 'ramda';

import styles from './index.module.scss';

class Index extends PureComponent {
  slidesRender = () => {
    const { items } = this.props;
    if (isNil(items) || isEmpty(items))
      return <>请传入轮播图需要的参数 items</>;

    return items.map((item, i) => {
      return (
        <div key={`slide-${i}`}>
          <img className={styles.img} src={item} alt={`Slide ${i}`} draggable={false} />
        </div>
      );
    });
  };

  render() {
    const { autoPlay, loop } = this.props;

    return (
      <Carousel autoPlay={autoPlay} loop={loop}>
        {this.slidesRender()}
      </Carousel>
    );
  }
}

Index.displayName = 'Swiper';
Index.defaultProps = {
  autoPlay: true,
  loop: true,
};

export default Index;
