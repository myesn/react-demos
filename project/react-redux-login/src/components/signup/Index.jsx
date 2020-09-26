import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as signupActions from '../../actions/signup';
import * as messageActions from '../../actions/message';

import Form from './Form';

class Index extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          {/* history={this.props.history} */}
          <Form actions={this.props.actions} />
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
        ...signupActions,
        ...messageActions,
      },
      dispatch
    ),
  };
};

export default connect(null, mapDispatchToProps)(Index);
