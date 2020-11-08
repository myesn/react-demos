import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { isNil, isEmpty, map } from 'ramda';

import styles from './index.module.scss';

function Item({ id, title, houseType, price, rentType, img }) {
  return (
    <Link to={`/detail?id=${id}`} className={styles.black_font}>
      <div className={styles.box}>
        <img src={img} alt={title} className={styles.img} />
        <div className={styles.info_container}>
          <span className={styles.item}>{title}</span>
          <span className={styles.item}>{houseType}</span>
          <span className={styles.item}>{rentType}</span>
          <span className={styles.item}>{price}/月</span>
        </div>
      </div>
    </Link>
  );
}

class List extends PureComponent {
  contentRender = (items) =>
    map((item) => <Item key={item.id} {...item} />, items);

  render() {
    const { items } = this.props;

    if (isNil(items) || isEmpty(items)) {
      return '暂无数据';
    }

    return this.contentRender(items);
  }
}

export default List;
