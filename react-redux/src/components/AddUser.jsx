import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addUser } from '../actions/user';

class AddUser extends React.Component {
  constructor() {
    super();

    this.idRef = React.createRef();
    this.nameRef = React.createRef();
  }

  handleAddUseClick = () => {
    const { addUser } = this.props.actions;    

    if (!this.idRef.value) return;
    if (!this.nameRef.value) return;

    addUser(this.idRef.value, this.nameRef.value);

    this.idRef.value = '';
    this.nameRef.value = '';
  };

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='id'
          ref={(node) => (this.idRef = node)}
        />
        <input
          type='text'
          placeholder='name'
          ref={(node) => (this.nameRef = node)}
        />
        <button onClick={this.handleAddUseClick}>add</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ addUser }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
