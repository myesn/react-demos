import React, { PureComponent } from 'react';
import { isNil, isEmpty, map } from 'ramda';
//import { Pull, BackToTop  } from 'zarm' // 下滑获取更多数据

import styles from './index.module.scss';

function Item({ id, title, houseType, price, rentType, img }) {
  return (
    <div className={styles.box}>
      <img src={img} alt={title} className={styles.img} />
      <div className={styles.info_container}>
        <span className={styles.item}>{title}</span>
        <span className={styles.item}>{houseType}</span>
        <span className={styles.item}>{rentType}</span>
        <span className={styles.item}>{price}/月</span>
      </div>
    </div>
  );
}

class List extends PureComponent {
  contentRender = (items) =>
    map((item) => <Item key={item.id} {...item} />, items);

  render() {
    const { data } = this.props;

    if (isNil(data) || isNil(data.items) || isEmpty(data.items)) {
      return '暂无数据';
    }

    return <div>{this.contentRender(data.items)}</div>;
  }
}

export default List;
