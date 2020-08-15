import React from 'react';

const UCenter = (props) => {
  return <div>ucenter: {props.match.params.id} - {props.match.params.name}</div>;
};

export default UCenter;
