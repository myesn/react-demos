import React from 'react';
import classNames from 'classnames';

class Message extends React.PureComponent {
  onClick = () => {
    this.props.onClose && this.props.onClose(this.props.id);
  };

  render() {
    const { type, text } = this.props;

    return (
      <div
        className={classNames('alert', {
          'alert-success': type === 'success',
          'alert-danger': type === 'error',
        })}>
        {text}
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
          onClick={this.onClick}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    );
  }
}

export default Message;
