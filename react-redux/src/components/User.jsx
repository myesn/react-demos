import React from 'react';

export default class User extends React.Component {
  render() {
    const { id, name } = this.props;

    return (
      <div>
        id: {id}, name: {name}
      </div>
    );
  }
}
