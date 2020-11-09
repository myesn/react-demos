import React from 'react';
import { isNil, isEmpty } from 'ramda';

function Comment({ comment }) {
  return <div>{comment}</div>;
}

function Comments({ items }) {
  const contentRender = () => {
    if (isNil(items) || isEmpty(items)) return '无数据';

    return items.map((item) => <Comment key={item.id} {...item} />);
  };

  return <div>{contentRender()}</div>;
}

export default Comments;
