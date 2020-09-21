import React from 'react';
import { connect } from 'react-redux';

// import { increment, decrement } from './actions/counter';
import * as counterActions from './actions/counter';
import { bindActionCreators } from 'redux';
// import Parent from './components/Parent';
import UserManager from './components/User/UserManager';

class App extends React.Component {
  render() {
    const { counter } = this.props;
    const { increment, decrement } = this.props.actions;

    return (
      <div>
        {/* <Parent/> */}
        <h1>{counter}</h1>
        <div>
          <button onClick={() => increment(10)}>increment</button>
          <button onClick={() => decrement(5)}>decrement</button>
        </div>
        <UserManager />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(counterActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
