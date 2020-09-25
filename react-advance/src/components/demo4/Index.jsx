import React from 'react';

/**
 * 高阶组件是参数为组件，返回值为新组件的函数
 */

const withFetch = (ComposeComponent) => {
  return class extends React.Component {
    render() {
      return <ComposeComponent {...this.props} />;
    }
  };
};

function MyData(props) {
  return <div>MyData:{props.data}</div>;
}

const WithFetch = withFetch(MyData);

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <WithFetch data='hello' />
      </div>
    );
  }
}
