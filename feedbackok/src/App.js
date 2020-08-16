import React from 'react';
import { FeedbackForm } from 'feedbackok-react';

class App extends React.Component {
  state = {
    showFeedbackok: false,
  };

  handleFeedbackClick = () => {
    this.setState({
      showFeedbackok: !this.state.showFeedbackok,
    });
  };

  render() {
    const { showFeedbackok } = this.state;
    const feedbackokView = showFeedbackok ? (
      <FeedbackForm pid="01gh6bd" />
    ) : null;
    const buttonText = showFeedbackok ? 'close feedback' : 'show feedback';
    return (
      <div>
        <button onClick={this.handleFeedbackClick}>{buttonText}</button>
        {feedbackokView}
      </div>
    );
  }
}

export default App;
