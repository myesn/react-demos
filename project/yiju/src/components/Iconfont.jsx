import React from 'react';
import { Icon } from 'zarm';

const Iconfont = ({ type }) => {
  const Iconfont = Icon.createFromIconfont(
    '//at.alicdn.com/t/font_2154629_qj0t7z1ody.js'
  );

  return <Iconfont type={type} />;
};

export default Iconfont;
