import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { removeMessage } from '../../../actions/message';
import Message from './Message';

class Messages extends React.PureComponent {
  onClose = (id) => {
    this.props.actions.removeMessage(id);
  };

  render() {
    const { messages } = this.props;

    if (!messages || messages.length === 0) return <></>;

    return (
      <div className='container'>
        {messages.map((message) => (
          <Message key={message.id} {...message} onClose={this.onClose} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ removeMessage }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
