import React, { PureComponent } from 'react';

import Navigation from '../Navigation';

const withNavigation = (Component) => {
  return class extends PureComponent {
    render() {
      return (
        <>
          <Component {...this.props} />
          <Navigation />
        </>
      );
    }
  };
};

export default withNavigation;
