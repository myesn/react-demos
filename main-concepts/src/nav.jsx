import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          {this.props.nav.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
    );
  }
}
