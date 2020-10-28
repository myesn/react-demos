import React from 'react';
import { Icon } from 'zarm';

const Iconfont = (props) => {
  const Iconfont = Icon.createFromIconfont(
    '//at.alicdn.com/t/font_2154629_9y0xsizczbt.js'
  );

  return <Iconfont {...props} />;
};

export default Iconfont;
