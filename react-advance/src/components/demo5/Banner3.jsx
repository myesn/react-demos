import React from 'react';

import withFetch from './withFetch';

const Banner3 = withFetch('https://api.jsonbin.io/b/5f6e07ba7243cd7e82437828')(
  (props) => {
    return <h1>{props.data[2].title}</h1>;
  }
);

export default Banner3;
