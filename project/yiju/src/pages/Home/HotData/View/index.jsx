import React, { PureComponent } from 'react';
import { Button } from 'zarm';

import styles from './index.module.scss';

function Box({ id, title, img }) {
  return (
    <div className={styles.box}>
      <Button
        size='lg'
        shape='circle'
        icon={<img className={styles.img} alt={title} src={img} />}
      />
      <div>{title}</div>
    </div>
  );
}

function Title({ text }) {
  return <h4 className={styles.title}>{text}</h4>;
}

class View extends PureComponent {
  render() {
    const { title, items } = this.props;
    const boxesView = items.map((item) => <Box key={item.id} {...item} />);

    return (
      <>
        <Title text={title} />
        <div className={styles.panel}>{boxesView}</div>
      </>
    );
  }
}

export default View;
