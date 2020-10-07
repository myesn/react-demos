import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addMessage } from '../../actions/message';

export default function (Component) {
  class RequireAuthorization extends React.Component {
    componentWillMount() {
      const { isAuthenticated, history } = this.props;
      const { addMessage } = this.props.actions;

      if (!isAuthenticated) {
        addMessage({
          type: 'error',
          text: '请登录后再访问',
        });

        history.replace('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      const { history } = this.props;

      if (!nextProps.isAuthenticated) {
        history.replace('/signin');
      }
    }

    render() {
      const { isAuthenticated } = this.props;
      if (!isAuthenticated) {
        return <></>;
      }

      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.user.isAuthenticated,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators({ addMessage }, dispatch),
    };
  };

  return withRouter(
    connect(mapStateToProps, mapDispatchToProps)(RequireAuthorization)
  );
}
