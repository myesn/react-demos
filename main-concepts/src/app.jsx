import React from 'react';
// import Home from './home';
// import Nav from './nav';
// import StateComponent from './stateComponent';
// import LifecycleComponent from './LifecycleComponent';
// import SetStateDemo from './SetStateDemo';
// import IfDemo from './IfDemo';
// import KeyDemo from './KeyDemo';
// import FormDemo from './FormDemo';
// import RefsAndDOM from './RefsAndDOM';
// import RefsForm from './RefsForm';
// import Parent from './lifting-state-up/Parent';
// import Compose from './Compose';
import TypeCheckingWithPropTypes from './TypeCheckingWithPropTypes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'title text',
    };
  }

  handleMofifyTitleClick = () => {
    this.setState((state) => ({
      title: 'title text changed by parent',
    }));
  };

  handleModifyTitle = (oldTitle, newTitle) => {
    console.log(oldTitle, newTitle);
    this.setState((state) => ({
      title: newTitle,
    }));
  };

  render() {
    // const nav1 = ['home', 'video', 'learn'];
    // const nav2 = ['web', 'java', 'node'];

    return (
      <div>
        {/* <h1>h1</h1>
        <h3>h3</h3>
        <Home />
        <Nav nav={nav1} title="nav1" />
        <Nav nav={nav2} title="nav2" /> */}
        {/* <StateComponent /> */}
        {/* <LifecycleComponent
          title={this.state.title}
          onModifyTitle={this.handleModifyTitle}
        />
        <button onClick={this.handleMofifyTitleClick}>
          modify title(parent)
        </button> */}
        {/* <SetStateDemo /> */}
        {/* <IfDemo /> */}
        {/* <KeyDemo /> */}
        {/* <FormDemo /> */}
        {/* <RefsAndDOM /> */}
        {/* <RefsForm /> */}
        {/* <Parent /> */}
        {/* <Compose>
          <div>div</div>
        </Compose> */}
        <TypeCheckingWithPropTypes />        
      </div>
    );
  }
}

export default App;
