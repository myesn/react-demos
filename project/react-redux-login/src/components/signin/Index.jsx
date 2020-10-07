import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Form from './Form';
import * as signinActions from '../../actions/signin';
import * as messageActions from '../../actions/message';

class Index extends React.Component {
  render() {
    const { actions } = this.props;

    return (
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <Form actions={actions} />
        </div>
        <div className='col-md-3'></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        ...signinActions,
        ...messageActions,
      },
      dispatch
    ),
  };
};

export default connect(null, mapDispatchToProps)(Index);
